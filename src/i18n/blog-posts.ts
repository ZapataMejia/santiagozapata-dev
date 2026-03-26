import type { Locale } from './types';

export type BlogPostMeta = {
  slug: string;
  tag: Record<Locale, string>;
  date: Record<Locale, string>;
  readTime: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'playwright-mcp-cursor',
    tag: { es: 'Playwright + Cursor', en: 'Playwright + Cursor' },
    date: { es: '26 mar 2026', en: 'March 26, 2026' },
    readTime: { es: '7 min', en: '7 min read' },
    title: {
      es: 'MCP de Playwright en Cursor: crear tests desde el IDE',
      en: 'Playwright MCP in Cursor: IDE-Native Test Creation',
    },
    excerpt: {
      es: 'Cómo conectar el servidor MCP oficial de Playwright a Cursor para navegar, inspeccionar el DOM y acelerar el diseño de pruebas E2E.',
      en: 'Wire Playwright’s official MCP server into Cursor to browse, inspect the DOM, and speed up E2E test design with real browser context.',
    },
  },
  {
    slug: 'playwright-tricks',
    tag: { es: 'Playwright', en: 'Playwright' },
    date: { es: '25 mar 2026', en: 'March 25, 2026' },
    readTime: { es: '6 min', en: '6 min read' },
    title: {
      es: '5 trucos de Playwright que me ahorraron horas',
      en: '5 Playwright Tricks That Saved Me Hours',
    },
    excerpt: {
      es: 'Desde test.step() hasta el trace viewer: patrones que uso a diario en producción y que puedes aplicar en tu suite.',
      en: 'From test.step() to the trace viewer: patterns I use daily in production and you can apply to your suite.',
    },
  },
  {
    slug: 'visual-regression-testing',
    tag: { es: 'Testing visual', en: 'Visual Testing' },
    date: { es: '13 mar 2026', en: 'March 13, 2026' },
    readTime: { es: '7 min', en: '7 min read' },
    title: {
      es: 'Testing visual: detecta bugs de UI antes que tus usuarios',
      en: 'Visual Regression Testing: Catching UI Bugs Before Your Users Do',
    },
    excerpt: {
      es: 'Cómo montar un pipeline multi-navegador y multi-viewport que detecta cambios de layout y regresiones CSS.',
      en: 'How to build a multi-browser, multi-viewport visual testing pipeline that catches layout shifts, font changes, and CSS regressions automatically.',
    },
  },
  {
    slug: 'qa-program-from-zero',
    tag: { es: 'Estrategia', en: 'Strategy' },
    date: { es: '10 mar 2026', en: 'March 10, 2026' },
    readTime: { es: '8 min', en: '8 min read' },
    title: {
      es: 'Cómo construí un programa de QA desde cero en una startup de YC',
      en: 'How I Built a QA Program from Zero for a Y Combinator Startup',
    },
    excerpt: {
      es: 'Infraestructura de automatización, procesos de calidad y cultura desde cero en DailyBot.',
      en: 'A deep dive into building test automation infrastructure, defining quality processes, and creating a culture of quality from the ground up at DailyBot.',
    },
  },
  {
    slug: 'ai-driven-e2e-testing',
    tag: { es: 'IA + QA', en: 'AI + QA' },
    date: { es: '5 mar 2026', en: 'March 5, 2026' },
    readTime: { es: '6 min', en: '6 min read' },
    title: {
      es: 'E2E con IA: lo que aprendí implementándolo en producción',
      en: 'AI-Driven E2E Testing: What I Learned Implementing It in Production',
    },
    excerpt: {
      es: 'Cómo la IA puede ampliar cobertura, reducir mantenimiento y encontrar casos límite.',
      en: 'Exploring how AI-augmented testing can improve test coverage, reduce maintenance overhead, and catch edge cases that traditional testing misses.',
    },
  },
  {
    slug: 'zero-to-80-percent-coverage',
    tag: { es: 'Tutorial', en: 'Tutorial' },
    date: { es: '28 feb 2026', en: 'February 28, 2026' },
    readTime: { es: '10 min', en: '10 min read' },
    title: {
      es: 'De 0 a 80% de cobertura en 3 meses: guía práctica',
      en: 'From 0 to 80% Test Coverage in 3 Months: A Practical Guide',
    },
    excerpt: {
      es: 'Framework, priorización y patrones que usé para alcanzar 80% E2E en LingoQuesto.',
      en: 'The exact framework, prioritization strategy, and automation patterns I used to achieve 80% E2E test coverage for LingoQuesto in record time.',
    },
  },
];

/** Article URL for the active site language (ES under /blog/, EN under /en/blog/). */
export function postHref(locale: Locale, slug: string): string {
  if (locale === 'es') return `/blog/${slug}`;
  return `/en/blog/${slug}`;
}
