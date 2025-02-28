/* istanbul ignore file */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getHiddenValue } from './redux/reducers/utils';
import cn from './translations/cn.json';
import en from './translations/en.json';
import pt from './translations/pt.json';
import de from './translations/de.json'; ##added by tgrisse

const language = getHiddenValue('language') || 'en';

i18next.use(initReactI18next).init({
  resources: { 
    en, 
    // cn, 
    // pt, 
    de 
  },
  lng: language,
  fallbackLng: 'en',
  keySeparator: false,
  react: {
    useSuspense: false,
  },
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
