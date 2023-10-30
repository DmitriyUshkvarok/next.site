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
        state.selectedWorkCardIds = state.selectedWorkCardIds.filter(
          (id) => id !== cardId
        );
      } else {
        state.selectedWorkCardIds.push(cardId);
      }
    },
    clearWorkState: (state) => {
      state.work = initialState.work;
      state.isWorkFormActive = initialState.isWorkFormActive;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateWorkAsync.fulfilled, (state, action) => {
      const work = selectWork(state);

      work.id = action.payload._id;
      work.enterprise = action.payload.enterprise;
      work.data = action.payload.data;
      work.region = action.payload.region;
      work.position = action.payload.position;
      work.image = action.payload.image;
      work.order = action.payload.order;
      work.photos = action.payload.photos;
      state.isWorkFormActive = false;
    });
  },
});

export const { toggleCardSelection, toggleWorkFormActive, clearWorkState } =
  workSlice.actions;
export default workSlice.reducer;
