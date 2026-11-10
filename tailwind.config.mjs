/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EFD6AD',
          pure: '#FFFFFF',
          warm: '#E8CE9F',
          subtle: '#F8EEDD',
          border: '#DEC197',
        },
        ink: {
          DEFAULT: '#1B140E',
          deep: '#120D09',
          soft: '#3A2D25',
          muted: '#685548',
          faint: '#9E8675',
        },
        terracotta: {
          DEFAULT: '#8C222C',
          dark: '#701A22',
          light: '#A82E3A',
          wash: '#F9E9EB',
        },
        crimson: {
          DEFAULT: '#8C222C',
          dark: '#701A22',
          light: '#A82E3A',
          wash: '#F9E9EB',
        },
        smoke: {
          DEFAULT: '#685548',
          dark: '#3A2D25',
          light: '#9E8675',
        },
        coral: {
          DEFAULT: '#D44E42',
          soft: '#B87266',
          sand: '#DCB393',
          wash: '#FDF2F0',
        },
        paths: {
          blue: '#1B140E',
          accent: '#8C222C',
          crimson: '#8C222C',
          smoke: '#685548',
          coral: '#D44E42',
          bg: '#EFD6AD',
          surface: '#FFFFFF',
          border: '#1B140E',
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
