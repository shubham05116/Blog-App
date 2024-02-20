import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../store/slices/accountSlices/loginSlice';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../store/slices/accountSlices/loginSlice';
import { setConfirmPassword, setFirstName, setIsSignedUp, setLastName, setSignedUpEmail, setSignedUpPassword } from '../store/slices/accountSlices/signUpslice';
import RemoveCookies from '../hooks/RemoveCookies';

const DropDown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(setIsLoggedIn(false));
        dispatch(setSignedUpPassword(''));
        dispatch(setSignedUpEmail(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        dispatch(setFirstName(''));
        dispatch(setLastName(''));
        // Remove Cookies
        RemoveCookies('userIn');
        dispatch(setIsSignedUp(false));
        dispatch(setConfirmPassword(''));

        navigate("/");
    }

    const myBlogHandler = () => {
        navigate('/myblogs');
    }

    const profileHandler = () => {
        navigate('/profile');
    }

    const createBlogHandler=()=>{
        navigate('/createblog');
    }

    return (
        <div className='flex flex-col'>
            <button className='p-2 m-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600' onClick={profileHandler}>My Profile</button>
            <button className='p-2 m-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600' onClick={myBlogHandler}>My Blogs</button>
            <button className='p-2 m-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600' onClick={createBlogHandler}>Create Blog</button>

            <button className='p-2 m-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default DropDown;
