import { configureStore } from '@reduxjs/toolkit';
import persisteAuthReducer from './authApi/authSlice';
import persistedLanguageReducer from './language/languageSlice';
import { portfolioApi } from './createPortfolioApi/createPortfolioApi';
import portfolioSlice from './portfolioSlice/portfolioSlice';
import persisteThemeReducer from './themeSlice/themeSlice';
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
    language: persistedLanguageReducer,
    portfolio: portfolioSlice,
    theme: persisteThemeReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(portfolioApi.middleware),
});

export const persistor = persistStore(store);

export default store;
