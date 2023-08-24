import { configureStore } from '@reduxjs/toolkit';
import persisteAuthReducer from './authApi/authSlice';
import { authApi } from './authApi/authApi';
import { producteApi } from '@/services';
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
    [authApi.reducerPath]: authApi.reducer,
    [producteApi.reducerPath]: producteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, producteApi.middleware),
});

export const persistor = persistStore(store);

export default store;
