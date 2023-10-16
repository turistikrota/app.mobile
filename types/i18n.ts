export type Locales = 'en' | 'tr'

export type I18nTranslation<T> = {
    [key in Locales]: T
  }
  
  export function isLocale(val: string): val is Locales {
    return ['en', 'tr'].includes(val)
  }