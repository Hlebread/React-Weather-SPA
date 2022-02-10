import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import ru from "./locales/ru";

i18n.use(LanguageDetector).init({
  resources: {
    ru,
    en,
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
