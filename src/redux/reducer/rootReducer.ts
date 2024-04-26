import { i18nReducer } from 'react-redux-i18n';
import authReducer from '@redux/features/users/authSlice';
import userReducer from '@redux/features/users/userSlice';
import { productApi } from '@redux/services/products/productApi';
import { userApi } from '@redux/services/users/userApi';

const rootReducer = {
  authState: authReducer,
  userState: userReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  i18n: i18nReducer,
};

export default rootReducer;