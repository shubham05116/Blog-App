import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/accountSlices/loginSlice'
import signUpReducer from  './slices/accountSlices/signUpslice'
import accountReducer from './slices/accountSlices/accountDetails'

export const store = configureStore({
  reducer: {
    login:loginReducer,
    signUp: signUpReducer,
    account: accountReducer
    // blog: blogReducer,
  },
})