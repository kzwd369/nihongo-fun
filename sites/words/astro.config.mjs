// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh-tw'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'https://nihongo-fun.com',
});
