// In your Redux slice file

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedImage: null,
};
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImage } = profileSlice.actions;

export default profileSlice.reducer;
