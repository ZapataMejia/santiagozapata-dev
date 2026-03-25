import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://santiagozapata.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/blog/visual-regression-testing': '/en/blog/visual-regression-testing',
    '/blog/qa-program-from-zero': '/en/blog/qa-program-from-zero',
    '/blog/ai-driven-e2e-testing': '/en/blog/ai-driven-e2e-testing',
    '/blog/zero-to-80-percent-coverage': '/en/blog/zero-to-80-percent-coverage',
  },
  integrations: [sitemap()],
});
