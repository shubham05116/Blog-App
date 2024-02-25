import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/accountSlices/loginSlice'
import signUpReducer from './slices/accountSlices/signUpslice'
import accountReducer from './slices/accountSlices/accountDetails'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import addBlogReducer from './slices/Blogs/addBlogSlice'
import blogDetailsReducer from './slices/Blogs/blogDetails'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  login: loginReducer,
  blog: blogDetailsReducer,
  signUp: signUpReducer,
  account: accountReducer,
  addBlog: addBlogReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
