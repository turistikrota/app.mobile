import { Locales } from "~types/i18n";

export enum Sites {
  Place = "place",
  Owner = "owners",
  Root = "root",
}

type I18nSiteUrl = Record<Locales, string>;

export const SiteUrls: Record<Sites, I18nSiteUrl> = {
  [Sites.Place]: {
    tr: "https://yerler.turistikrota.com",
    en: "https://places.turistikrota.com",
  },
  [Sites.Owner]: {
    tr: "https://satici.turistikrota.com",
    en: "https://seller.turistikrota.com",
  },
  [Sites.Root]: {
    tr: "https://turistikrota.com",
    en: "https://turistikrota.com",
  },
};

export const getSiteByLocale = (site: Sites, locale: Locales): string => {
  return SiteUrls[site][locale];
};
