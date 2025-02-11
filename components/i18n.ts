import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import { getLocales } from 'expo-localization'
import es from "@/assets/locales/es.json"

i18n
.use(initReactI18next)
.init({
  resources: {
    es: {
      translation: es
    }
  },
  lng: getLocales()[0].languageCode?.toString(), 
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n