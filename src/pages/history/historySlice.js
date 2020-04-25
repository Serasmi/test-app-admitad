import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    images: [],
  },
  reducers: {
    add: (state, action) => {
      const newImage = { ...action.payload, createdAt: moment().valueOf() };

      state.images.push(newImage);
    },
    remove: (state, action) => {
      const id = state.images.findIndex((image) => image.createdAt === action.payload);

      if (id !== -1) state.images.splice(id, 1);
    },
  },
});

export const { add, remove } = historySlice.actions;

export const selectImages = (state) => state.history.images;

export default historySlice.reducer;
