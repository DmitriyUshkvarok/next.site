import { configureStore } from '@reduxjs/toolkit';
import persisteAuthReducer from './authApi/authSlice';
import persistedLanguageReducer from './language/languageSlice';
import { authApi } from './authApi/authApi';
import { portfolioApi } from './createPortfolioApi/createPortfolioApi';
import portfolioSlice from './portfolioSlice/portfolioSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    language: persistedLanguageReducer,
    portfolio: portfolioSlice,
    [authApi.reducerPath]: authApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, portfolioApi.middleware),
});

export const persistor = persistStore(store);

export default store;
