
import {createSlice} from '@reduxjs/toolkit'

const initialState={
    email:'',
    password:'',
    private:false,
    isLoggedIn:false
}

export const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setPrivateRoute:(state,action)=>{
            state.private=action.payload
        },
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
        }
},
selectors: {
    selectData: state => state.account.data,
  },
})

export const {setEmail,setPassword,setPrivateRoute ,setIsLoggedIn}=loginSlice.actions
export default loginSlice.reducer
