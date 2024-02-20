import { createSlice } from "@reduxjs/toolkit"

const initialState={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    isSignedUp:false,

}

export const signUpSlice= createSlice({
    name:'signUp',
    initialState,
    reducers:{
        setFirstName:(state, action)=>{
            state.firstName=action.payload
        },
        setLastName:(state, action)=>{
            state.lastName=action.payload
        },
        setEmail:(state, action)=>{
            state.email=action.payload
        },
        setPassword:(state, action)=>{
            state.password=action.payload
        },
        setConfirmPassword:(state, action)=>{
            state.confirmPassword=action.payload
        },

        setIsSignedUp:(state, action)=>{
            state.isSignedUp=action.payload
        }
        
    


    }
})


export const {setFirstName, setLastName, setEmail, setPassword, setConfirmPassword, setIsSignedUp }=signUpSlice.actions
export default signUpSlice.reducer