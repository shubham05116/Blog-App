import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    data:[],
}

export const blogDetails = createSlice({
    name: 'blogs',
    initialState: intialState,
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