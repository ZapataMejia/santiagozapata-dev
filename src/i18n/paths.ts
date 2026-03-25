import type { Locale } from './types';

/** Localized site path (no domain). Hash links supported. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === 'es') {
    if (!path || path === '/') return '/';
    return path.startsWith('/') ? path : `/${path}`;
  }
  if (!path || path === '/') return '/en/';
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p.startsWith('/#')) return `/en${p}`;
  return `/en${p}`;
}
