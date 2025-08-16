import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_CONFIG } from '../utils/constants.js';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const items = posts
    .sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate))
    .map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/blog/${p.slug}/`,
    }));

  return rss({
    title: `${SITE_CONFIG.name} - Blog`,
    description: 'Artikel terbaru seputar laser cutting, CNC router, dan manufaktur',
    site: site ?? (new URL(SITE_CONFIG.url)),
    items,
    stylesheet: undefined,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
  });
};