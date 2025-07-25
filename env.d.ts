/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // Tambahkan variabel lain jika ada, misal:
  // readonly PUBLIC_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}