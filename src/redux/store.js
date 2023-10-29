import { configureStore } from '@reduxjs/toolkit';
import persistedLanguageReducer from './language/languageSlice';
import portfolioSlice from './portfolioSlice/portfolioSlice';
import workSlice from './workSlice/workSlice';
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
    work: workSlice,
    theme: persisteThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);

export default store;
