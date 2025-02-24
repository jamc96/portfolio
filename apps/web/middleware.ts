import { NextResponse, NextRequest } from 'next/server';
import { i18n, Locale } from '@/lib/i18n/types';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales: readonly string[] = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/');
    const langSegment = segments[1] as Locale;

    // Skip static files and other excluded paths
    if (/\.(.*)$/.test(pathname) || pathname.match(/\/(api|_next\/static|_next\/image|favicon.ico)/)) {
        return NextResponse.next();
    }

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Handle locale logic (missing or present)
    if (pathnameIsMissingLocale || !i18n.locales.includes(langSegment)) {
        const locale = getLocale(request);
        const response = locale === i18n.defaultLocale
            ? NextResponse.rewrite(
                new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
            )
            : NextResponse.redirect(
                new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
            );

        // Set the lang cookie once, regardless of rewrite or redirect
        response.cookies.set('lang', locale, {
            path: '/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });
        return response;
    }

    // If a valid locale is already present, set the cookie once
    const response = NextResponse.next();
    response.cookies.set('lang', langSegment, {
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });
    return response;
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, static files, and favicon
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};