#!/usr/bin/env node
/**
 * Migration Script: BLOG_POSTS (constants.js) -&gt; Markdown files in Content Collections
 *
 * - Membaca BLOG_POSTS dari src/utils/constants.js (ESM)
 * - Mengkonversi HTML content ke Markdown (turndown)
 * - Menulis file Markdown ke src/content/blog/[slug].md dengan frontmatter lengkap
 *
 * CATATAN: Tidak menghapus atau memodifikasi constants.js. Hanya generate file markdown.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const constantsPath = path.resolve(root, 'src/utils/constants.js');
const outputDir = path.resolve(root, 'src/content/blog');

async function loadBlogPosts() {
  try {
    const moduleUrl = pathToFileURL(constantsPath).href;
    const mod = await import(moduleUrl);
    if (!mod || !mod.BLOG_POSTS) {
      throw new Error('Tidak menemukan BLOG_POSTS di src/utils/constants.js');
    }
    return mod.BLOG_POSTS;
  } catch (err) {
    console.error('\n[ERROR] Gagal mengimpor src/utils/constants.js sebagai ESM.');
    console.error('Pastikan package.json memiliki "type": "module" atau jalankan Node versi yang mendukung ESM.');
    throw err;
  }
}

function toFrontmatter(obj) {
  // Serialize object to YAML frontmatter sederhana tanpa dependency tambahan
  const esc = (str) => String(str).replace(/"/g, '\\"');
  const lines = [];
  if (obj.title) lines.push(`title: "${esc(obj.title)}"`);
  if (obj.description) lines.push(`description: "${esc(obj.description)}"`);
  if (obj.pubDate) lines.push(`pubDate: ${new Date(obj.pubDate).toISOString()}`);
  if (obj.category) lines.push(`category: "${esc(obj.category)}"`);
  if (Array.isArray(obj.tags)) {
    const tagItems = obj.tags.map(t => `  - "${esc(t)}"`).join('\n');
    lines.push('tags:');
    lines.push(tagItems);
  }
  if (obj.image) lines.push(`image: "${esc(obj.image)}"`);
  if (obj.readTime) lines.push(`readTime: "${esc(obj.readTime)}"`);
  if (obj.author) lines.push(`author: "${esc(obj.author)}"`);
  if (typeof obj.draft === 'boolean') lines.push(`draft: ${obj.draft ? 'true' : 'false'}`);
  return ['---', ...lines, '---'].join('\n');
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function run() {
  console.log('[BLOG MIGRATION] Mulai migrasi BLOG_POSTS -&gt; Markdown...');

  const posts = await loadBlogPosts();
  await ensureDir(outputDir);

  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });

  let success = 0;
  for (const p of posts) {
    try {
      const slug = p.slug || (p.title || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
      const html = (p.content || '').trim();
      const mdBody = turndown.turndown(html);

      const fm = {
        title: p.title,
        description: p.excerpt || p.description || '',
        pubDate: p.publishDate || p.pubDate || new Date().toISOString(),
        category: p.category,
        tags: Array.isArray(p.tags) ? p.tags : [],
        image: p.image,
        readTime: p.readTime,
        author: p.author,
        draft: !!p.draft,
      };

      const frontmatter = toFrontmatter(fm);
      const fileContent = `${frontmatter}\n\n${mdBody}\n`;

      const outFile = path.resolve(outputDir, `${slug}.md`);
      await fs.promises.writeFile(outFile, fileContent, 'utf8');
      console.log(`✔ Generated: src/content/blog/${slug}.md`);
      success++;
    } catch (e) {
      console.error('✖ Gagal memproses post:', p?.title, e);
    }
  }

  console.log(`\n[BLOG MIGRATION] Selesai. ${success}/${posts.length} file berhasil dibuat di src/content/blog.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});