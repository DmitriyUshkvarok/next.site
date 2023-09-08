import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['value'],
};

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.value;

const persistedLanguageReducer = persistReducer(
  languagePersistConfig,
  languageSlice.reducer
);

export default persistedLanguageReducer;
