import localize from "../localization/index";
import { configureStore } from "@reduxjs/toolkit";
import { i18nReducer, syncTranslationWithStore } from "react-redux-i18n";
import authSlice from "@features/auth/authSlice";
import i18nAction from "./action/i18nAction";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    i18n: i18nReducer,
  },
});

syncTranslationWithStore(store);
store.dispatch(i18nAction.loadTranslations(localize));
store.dispatch(i18nAction.setLocale("vi"));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
