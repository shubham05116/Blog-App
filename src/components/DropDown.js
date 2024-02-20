import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn } from '../store/slices/accountSlices/loginSlice'
import { useNavigate } from 'react-router-dom'
import { setEmail, setPassword } from '../store/slices/accountSlices/loginSlice'
import { setFirstName, setIsSignedUp, setLastName  } from '../store/slices/accountSlices/signUpslice'
import RemoveCookies from '../hooks/RemoveCookies'


const DropDown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(setIsLoggedIn(false))
        dispatch(setEmail(''))
        dispatch(setPassword(''))
        dispatch(setFirstName(''))
        dispatch(setLastName(''))
       //Remove Cookies
       RemoveCookies('userIn')
       dispatch(setIsSignedUp(false))

       navigate("/")
      }

        const myBlogHandler = () => {
            navigate('/myblogs')
        }
        const profileHandler=()=>{
            navigate('/profile')
        }



  return (
    <div className='flex flex-col'>
    <button onClick={profileHandler}>My Profile</button>
    <button onClick={myBlogHandler}>My Blogs</button>
    <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default DropDown
