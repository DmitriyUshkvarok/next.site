import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const createPersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['themeColor'],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: { themeColor: 'dark' },
  reducers: {
    setTheme: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
const persisteThemeReducer = persistReducer(
  createPersistConfig,
  themeSlice.reducer
);

export default persisteThemeReducer;
