// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh-tw', 'th'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'https://nihongo-fun.com',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/en/'),
    }),
  ],
});
