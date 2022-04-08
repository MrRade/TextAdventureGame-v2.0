import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import moment from "moment-timezone";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        saveMissing: true,
        missingKeyHandler: (lngs, ns, key, fallbackValue) => { console.log("missing key: ", {lngs, ns, key, fallbackValue})}
    });

export default i18n;

export const getLanguageLabel = (code: string) => {
    switch (code) {
        case "en":
            return "EN";
        case "de":
            return "DE";
        default:
            return "unknown";
    }
};

export const getAvailableLanguages = () => ["en", "de"];
export const getAvailableOtherLanguages = () => getAvailableLanguages().filter(l => i18n.language !== l);
export const getLanguage = (): string => {
    return i18n.language ||
        (typeof window !== "undefined" && window.localStorage.i18nextLng) ||
        "en";
};

export const getDateFormat = (): string => {
    const language = getLanguage();
    const languageGroup = language.includes("-")
        ? language.split("-")[0]
        : language;

    switch (languageGroup.toLowerCase()) {
        case "en":
            return "MM/DD/YYYY HH:mm z";
        case "de":
            return "DD.MM.YYYY HH:mm z";
    }
    return "MM/DD/YYYY HH:mm z";
};

export const getFormattedDate = (date: string): string => {
    return moment(date).utc()
        .format(getDateFormat());
};