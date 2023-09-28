import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updatePortfolio } from '@/src/actions/portfolioActions';

export const updatePortfolioAsync = createAsyncThunk(
  'portfolio/update',
  async ({ id, data }) => {
    const response = await updatePortfolio(id, data);
    // Исключите createdAt и updatedAt из данных
    const { createdAt, updatedAt, ...payloadWithoutDates } = response;
    return payloadWithoutDates;
  }
);

const initialState = {
  portfolio: {
    title: '',
    description: '',
    website: '',
    pageCode: '',
    image: '',
  },
  status: 'idle',
  error: null,
  isFormActive: false,
  selectedCardIds: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setEditingPortfolio: (state, action) => {
      state.portfolio = action.payload;
      state.isFormActive = true;
    },
    toggleCardSelection: (state, action) => {
      const cardId = action.payload;
      if (state.selectedCardIds.includes(cardId)) {
        // Если карточка уже выбрана, уберите ее из массива выбранных
        state.selectedCardIds = state.selectedCardIds.filter(
          (id) => id !== cardId
        );
      } else {
        // В противном случае добавьте карточку в массив выбранных
        state.selectedCardIds.push(cardId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePortfolioAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePortfolioAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.portfolio = action.payload.portfolio;
        state.isFormActive = false;
      })
      .addCase(updatePortfolioAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setEditingPortfolio, toggleCardSelection } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
