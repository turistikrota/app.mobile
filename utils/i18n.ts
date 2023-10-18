export const getCurrencyByLocale = (locale: string): string => {
  if (locale === "en") return "dollar";
  return "lira";
};
