import { createSlice } from "@reduxjs/toolkit"

const initialState={
    data:[]
}

export const accountDetails=createSlice({
    name:"account",
    initialState,
    reducers:{
        setAccountDetails:(state, action)=>{
            state.data=action.payload
        },
    },
    selectors: {
        selectData: state => state.account.data,
      },

})

export const {setAccountDetails}=accountDetails.actions
export default accountDetails.reducer