import 'server-only'
import type { Locale } from '@/lib/i18n/types'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    es: () => import('@/dictionaries/es.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
