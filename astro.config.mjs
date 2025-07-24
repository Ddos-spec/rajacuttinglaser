import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // URL lengkap website lu setelah di-deploy
  site: 'https://Ddos-spec.github.io',
  // Nama repo lu, diawali dan diakhiri garis miring
  base: '/rajacuttinglaser/',
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
