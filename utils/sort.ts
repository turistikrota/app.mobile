import { Locales } from "~types/i18n";
import { Orderable } from "~types/place";

export const turkishSorting = (a: string, b: string) =>
  a.localeCompare(b, "tr");
export const englishSorting = (a: string, b: string) =>
  a.localeCompare(b, "en");
export const sort = (arr: string[], lang: Locales) => {
  if (lang === "tr") {
    return arr.sort(turkishSorting);
  }
  return arr.sort(englishSorting);
};

export const imageSort = <T extends Orderable>(imgs: T[]): T[] => {
  return imgs.sort((a, b) => a.order - b.order);
};
