import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  content: '',
  image: '',
  singleBlog: {},
};

const addBlogSlice = createSlice({
  name: 'addBlog',
  initialState,
  reducers: {
    setSingleBlog: (state, action) => {
      state.singleBlog = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
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

export const { setTitle, setContent, setImage , setId ,setSingleBlog} = addBlogSlice.actions;

export default addBlogSlice.reducer;
