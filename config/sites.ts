import { Locales } from "~types/i18n";

export enum Sites {
  Place = "place",
}

type I18nSiteUrl = Record<Locales, string>;

export const SiteUrls: Record<Sites, I18nSiteUrl> = {
  [Sites.Place]: {
    tr: "https://yerler.turistikrota.com",
    en: "https://places.turistikrota.com",
  },
};

export const getSiteByLocale = (site: Sites, locale: Locales): string => {
  return SiteUrls[site][locale];
};
