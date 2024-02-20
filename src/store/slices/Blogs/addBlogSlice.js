import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
  image: '',
};

const addBlogSlice = createSlice({
  name: 'addBlog',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setTitle, setContent, setImage } = addBlogSlice.actions;

export default addBlogSlice.reducer;
