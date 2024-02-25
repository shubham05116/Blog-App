import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId:null,
  id: '',
  title: '',
  content: '',
  image: '',
  singleBlog: '',
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
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  },
});

export const { setTitle, setContent, setImage , setId ,setUserId,setSingleBlog} = addBlogSlice.actions;

export default addBlogSlice.reducer;
