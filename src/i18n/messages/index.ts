import type { Locale } from '../types';
import { en } from './en';
import { es } from './es';

export const messages: Record<Locale, typeof en> = { es, en };

export { en, es };
