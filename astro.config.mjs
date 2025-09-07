import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server', // enables SSR API routes on most adapters
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),  
  integrations: [tailwind(), sitemap()],
});