import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../translations/en.json';
import plTranslation from '../translations/pl.json';

i18n.use(initReactI18next).init({
	lng: 'en',
	resources: {
		en: { translation: enTranslation },
		pl: { translation: plTranslation }
	},
	interpolation: {
		escapeValue: false
	},
	fallbackLng: 'en'
});

export default i18n;
