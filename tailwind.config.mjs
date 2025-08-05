/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'container': '#2E2E2E',
        'primary': '#C0C0C0',
        'highlight': '#E5E5E5',
        'button': '#E63946',
        'text-main': '#FFFFFF',
        'text-secondary': '#BBBBBB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}