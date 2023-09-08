import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../locales/en.json';
import ruTranslation from '../../locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
  lng: 'en', // Устанавливаем язык по умолчанию
  fallbackLng: 'en', // Язык по умолчанию в случае отсутствия перевода
  interpolation: {
    escapeValue: false, // не эскейпим HTML-теги
  },
});

export default i18n;
