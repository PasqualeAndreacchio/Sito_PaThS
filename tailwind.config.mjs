/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF9F6',
          pure: '#FFFFFF',
          warm: '#F4F2EC',
          border: '#E5E0D8',
        },
        ink: {
          DEFAULT: '#16243E',
          deep: '#101B2E',
          soft: '#263859',
          muted: '#5B677D',
          faint: '#8F9BAE',
        },
        terracotta: {
          DEFAULT: '#9A3324',
          dark: '#7A2417',
          light: '#BA4433',
          wash: '#FAF0EE',
        },
        crimson: {
          DEFAULT: '#990012',
          dark: '#75000E',
          light: '#BF0A22',
          wash: '#FCECEF',
        },
        smoke: {
          DEFAULT: '#5B677D',
          dark: '#3D4758',
          light: '#8894A8',
        },
        coral: {
          DEFAULT: '#E11D48',
          soft: '#F43F5E',
          wash: '#FFF1F2',
        },
        paths: {
          blue: '#16243E',
          accent: '#9A3324',
          crimson: '#990012',
          smoke: '#5B677D',
          coral: '#E11D48',
          bg: '#FAF9F6',
          surface: '#FFFFFF',
          border: '#16243E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        hand: ['"Architects Daughter"', 'cursive', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
};
