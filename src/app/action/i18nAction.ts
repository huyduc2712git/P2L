const LOAD_TRANSLATIONS = "@@i18n/LOAD_TRANSLATIONS";
export const SET_LOCALE = "@@i18n/SET_LOCALE";

export const loadTranslations = (translations: any) => ({
  type: LOAD_TRANSLATIONS,
  translations,
});

export const setLocale = (locale: string) => ({
  type: SET_LOCALE,
  locale,
});

export default {
  loadTranslations,
  setLocale,
};
