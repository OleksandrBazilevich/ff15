import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  resources: { en: { translationsNS: {} } }
});

export default i18n;
