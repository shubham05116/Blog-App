import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[],
}

export const blogDetails = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.data = action.payload
        }
    },
    selectors: {
        selectBlogs: state => state.blogs.data,
    }

})

export const { setBlogs } = blogDetails.actions
export default blogDetails.reducer