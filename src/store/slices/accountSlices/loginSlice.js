
import {createSlice} from '@reduxjs/toolkit'

const initialState={
    email:'',
    password:'',
    isLoggedIn:false,
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
        },
}
})

export const {setEmail,setPassword, setIsLoggedIn}=loginSlice.actions
export default loginSlice.reducer
