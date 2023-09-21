import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18n = i18next.createInstance();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: i18n.language,
    debug: _IS_DEV_,
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
