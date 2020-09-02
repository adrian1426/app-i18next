import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
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