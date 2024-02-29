import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es.json';


i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'es',
    supportedLngs: ['es'],
    resources: {
      es: es,
    },
    detection: {
      caches: []
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;