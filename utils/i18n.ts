export const getCurrencyByLocale = (locale: string): "dollar" | "lira" => {
  if (locale === "en") return "dollar";
  return "lira";
};
