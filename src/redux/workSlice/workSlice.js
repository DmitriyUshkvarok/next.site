import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateWork } from '@/src/actions/worksAction';

export const selectWork = (state) => state.work.work;

export const updateWorkAsync = createAsyncThunk(
  'portfolio/update',
  async ({ id, data }) => {
    const response = await updateWork(id, data);
    return response;
  }
);

const initialState = {
  isWorkFormActive: false,
  work: {
    _id: '',
    enterprise: '',
    data: '',
    region: '',
    position: [],
    image: '',
    order: 0,
    photos: [],
  },
};

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    toggleWorkFormActive: (state, action) => {
      state.isWorkFormActive = true;
      state.work = action.payload;
    },
    toggleCardSelection: (state, action) => {
      const cardId = action.payload;
      if (state.selectedWorkCardIds.includes(cardId)) {
        // Если карточка уже выбрана, уберите ее из массива выбранных
        state.selectedWorkCardIds = state.selectedWorkCardIds.filter(
          (id) => id !== cardId
        );
      } else {
        // В противном случае добавьте карточку в массив выбранных
        state.selectedWorkCardIds.push(cardId);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateWorkAsync.fulfilled, (state, action) => {
      const work = selectWork(state);

      // Заполните поля объекта work данными из action.payload
      work.id = action.payload._id;
      work.enterprise = action.payload.enterprise;
      work.data = action.payload.data;
      work.region = action.payload.region;
      work.position = action.payload.position;
      work.image = action.payload.image;
      work.order = action.payload.order;
      work.photos = action.payload.photos;
      // state.isWorkFormActive = true;
      // state.work.id = action.payload._id;
      // state.work.enterprise = action.payload.enterprise;
      // state.work.data = action.payload.data;
      // state.work.region = action.payload.region;
      // state.work.position = action.payload.position;
      // state.work.image = action.payload.image;
      // state.work.order = action.payload.order;
      // state.work.photos = action.payload.photos;
    });
  },
});

export const { toggleCardSelection, toggleWorkFormActive } = workSlice.actions;
export default workSlice.reducer;
