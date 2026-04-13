// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh-tw'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'https://nihongo-fun.com',
});
