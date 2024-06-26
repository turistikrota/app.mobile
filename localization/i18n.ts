import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
import { isLocale } from "~types/i18n";
import en from "./en";
import tr from "./tr";

export const resources = {
  en: en,
  tr: tr,
};

const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const fixLanguageCode = (code: string, fallback: string): string => {
  const _code = code.toLowerCase();
  if (_code.includes("_")) {
    const [language, region] = _code.split("_");
    return isLocale(language) ? language : fallback;
  }
  if (_code.includes("-")) {
    const [language, region] = _code.split("-");
    return isLocale(language) ? language : fallback;
  }
  return isLocale(_code) ? _code : fallback;
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: deviceLanguage ? fixLanguageCode(deviceLanguage, "en") : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
