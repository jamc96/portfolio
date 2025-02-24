import { getDictionary } from './dictionary';
import { getServerLocale } from './i18n/server';
import { Locale } from './i18n/types';

export async function getTranslatedData() {
    const locale = await getServerLocale() as Locale;
    return await getDictionary(locale);
}