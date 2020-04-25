import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    image: {
      url: 'http://www.opeterburge.ru/images/content/lajfkhaki/sankt_peterburg_foto_01.jpg',
      title: 'Санкт-Петербург',
    },
  },
  reducers: {
    set: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { set } = mainSlice.actions;

export const selectImage = (state) => state.main.image;

export default mainSlice.reducer;
