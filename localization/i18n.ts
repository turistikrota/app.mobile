import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import en from "./en";
import tr from "./tr";

export const resources = {
    en: en,
    tr: tr,
}

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
  resources,
  lng: deviceLanguage ?? 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})