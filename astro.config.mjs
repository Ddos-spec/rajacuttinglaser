// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rajacuttinglaser.com',
  base: '/',

  integrations: [tailwind(), sitemap()],

  output: 'static',

  // No experimental flags to ensure CI stability

  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@utils': '/src/utils'
      }
    }
  },

  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  }
});