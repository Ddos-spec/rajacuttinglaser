// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config  
export default defineConfig({
  // Domain final untuk canonical dan sitemap
  site: 'https://rajacuttinglaser.com',
  base: '/',

  integrations: [tailwind(), sitemap()],

  // Build output static agar SEO maksimal
  output: 'static',

  // Hapus experimental flags yang menyebabkan astro sync gagal
  // (akan kita aktifkan kembali sesuai versi Astro yang mendukung)

  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
      },
    },
  },

  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
});