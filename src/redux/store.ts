import { createStore, combineReducers } from 'redux';
import { syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from "@redux/reducer/rootReducer";
import i18nAction from './action/i18nAction';
import localize from '../localization/index';
import { productApi } from './services/products/productApi';
import { userApi } from './services/users/userApi';

const rootReducer = combineReducers({
  ...reducers,
  middleware: (getDefaultMiddleware: (arg0: {}) => any[]) =>
    getDefaultMiddleware({}).concat([
      productApi.middleware,
      userApi.middleware,
    ]),
  i18n: i18nReducer,
});

const store =  createStore(rootReducer);

syncTranslationWithStore(store)
store.dispatch(i18nAction.loadTranslations(localize));
store.dispatch(i18nAction.setLocale("vi"));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
