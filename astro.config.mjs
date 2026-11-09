import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://paths.ai-sf.it',
  // Per GitHub Pages (se il repo si chiama ad es. "Sito_PaThS" e non è custom domain):
  // base: process.env.BASE_PATH || '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

