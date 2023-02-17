import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    saveMissing: true,
  });

export default i18n;

export const getLanguageLabel = (code: string) => {
  switch (code) {
    case 'en':
      return 'EN';
    case 'de':
      return 'DE';
    default:
      return 'unknown';
  }
};

export const getAvailableLanguages = () => ['en', 'de'];
export const getAvailableOtherLanguages = () => {
  getAvailableLanguages().filter((l) => i18n.language !== l);
};
export const getLanguage = (): string => i18n.language
    || (typeof window !== 'undefined' && window.localStorage.i18nextLng)
    || 'en';
