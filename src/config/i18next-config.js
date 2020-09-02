import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
      es: {
        translation: {
          app: {
            title: "Bienvenido a react <strong>{{name}}</strong>"
          }
        }
      },
      en: {
        translation: {
          app: {
            title: "Welcome to react <strong>{{name}}</strong>"
          }
        }
      }
    }
  });