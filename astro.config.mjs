import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://ddos-spec.github.io/rajacuttinglaser/',
  // Use dynamic base path that will be set by GitHub Actionbase: process.env.CI ? 
    '/rajacuttinglaser' : undefined,  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});

