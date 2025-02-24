import { cookies } from 'next/headers';
import { i18n, Locale } from './types';

export async function getServerLocale(): Promise<Locale> {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || i18n.defaultLocale;
    return lang as Locale;
}