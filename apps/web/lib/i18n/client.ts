// apps/web/lib/i18n.client.ts (or a similar client-only file)
'use client';

import { useParams, usePathname } from 'next/navigation';
import { i18n, Locale } from './types';

export function useClientLocale(): string {
    const params = useParams();
    const pathname = usePathname();
    const segments = pathname.split('/');

    // If using domain/[lang] routing, locale is in params.lang or URL segments
    if (params && 'lang' in params) {
        return params.lang as string;
    }

    // Fallback: Check URL segments for locale (e.g., /en/path)
    const localeFromPath = segments[1] as Locale;
    return i18n.locales.includes(localeFromPath) ? localeFromPath : i18n.defaultLocale;
}