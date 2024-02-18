import React from 'react'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn } from '../store/slices/accountSlices/loginSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(setIsLoggedIn(false))
    navigate("/")
  }

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : null
        
      }
    </div>
  )
}

export default Home
