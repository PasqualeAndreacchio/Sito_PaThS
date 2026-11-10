import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://pasqualeandreacchio.github.io',
  base: '/Sito_PaThS',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});

