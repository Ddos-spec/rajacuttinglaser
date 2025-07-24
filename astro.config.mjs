  import { defineConfig } from 'astro/config';
  import tailwind from '@astrojs/tailwind';
  import sitemap from '@astrojs/sitemap';

  export default defineConfig({
    output: 'static',
    site: 'https://rajametalcutting.com',
    // Use dynamic base path that will be set by GitHub Actions
    base: process.env.CI ? undefined : '/raja-metal-cutting-new',
    integrations: [
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

