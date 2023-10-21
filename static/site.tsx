import { SiteUrls } from "~config/sites";
import { Locales } from "~types/i18n";

export type RouteType = {
  aboutUs: string;
  owners: string;
  contracts: {
    terms: string;
    privacyNotify: string;
    privacy: string;
  };
};

const Routes: Record<Locales, RouteType> = {
  tr: {
    aboutUs: `${SiteUrls.root.tr}/hakkimizda`,
    owners: `${SiteUrls.owners.tr}/detay/menu`,
    contracts: {
      terms: `${SiteUrls.root.tr}/sozlesmeler/kullanim-kosullari`,
      privacyNotify: `${SiteUrls.root.tr}/sozlesmeler/gizlilik-bildirimi`,
      privacy: `${SiteUrls.root.tr}/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizlilik-politikasi`,
    },
  },
  en: {
    aboutUs: `${SiteUrls.root.en}/about-us`,
    owners: `${SiteUrls.owners.en}/detail/menu`,
    contracts: {
      terms: `${SiteUrls.root.en}/contracts/terms-of-use`,
      privacyNotify: `${SiteUrls.root.en}/contracts/privacy-notice`,
      privacy: `${SiteUrls.root.en}/contracts/privacy-and-protection-of-personal-data`,
    },
  },
};

export const getStaticRoute = (locale: Locales) => {
  return Routes[locale];
};
