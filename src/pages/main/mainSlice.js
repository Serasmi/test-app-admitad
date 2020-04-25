import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    image: {},
    isLoading: false,
  },
  reducers: {
    set: (state, action) => {
      state.image = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { set, setLoading } = mainSlice.actions;

// Selectors
export const selectImage = (state) => state.main.image;
export const selectLoading = (state) => state.main.isLoading;

export default mainSlice.reducer;
