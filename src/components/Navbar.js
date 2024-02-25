import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DropDown from "./DropDown"

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const [dropDown, setDropDown] = useState(false);
    const isSignedUp = useSelector(state => state.signUp.isSignedUp);
    const storedUserData = useSelector(state => state.account.data);
    const navigate = useNavigate();
    const email = useSelector((state) => state.login.email);


    const dopDownHandler = () => {
      setDropDown(!dropDown);
    };

    const filterData = storedUserData.filter((user) => {
        return user.signUpEmail === email;
    });


const homePageHandler=()=>{
    navigate('/home')

}
const signedUpEmail = useSelector((state) => state.signUp.signUpEmail);


const filterD = storedUserData.filter((user) => {
    return user.signUpEmail === signedUpEmail;
});


  return (
    <div>
      {isLoggedIn ? (
        <div className='flex justify-between items-center bg-red-300 shadow-xl text-white py-2 mb-10'>
        <div>
            <h1 className="text-3xl font-bold ">All Blogs</h1>
          </div>
          <div onClick={homePageHandler} className='cursor-pointer font-bold text-lg '>Home</div>
          <div className="flex items-center ">
            {filterData.map((user)=><p className='font-bold'>{user.firstName}</p>)}

            <IoMdArrowDropdown className="text-3xl" onClick={dopDownHandler} />
            {dropDown ? (
              <div className='absolute right-0 top-10 bg-white shadow-md p-2'>
                <DropDown />
              </div>
            ) : null}
          </div>
          
        </div>
      ) : (
        <div>
          {isSignedUp ? (
            <div className='flex justify-between items-center border-2 border-gray-400 bg-slate-200 shadow-xl mb-10'>
        <div>
            <h1 className="text-3xl font-bold ">All Blogs</h1>
          </div>
          <div onClick={homePageHandler} className='cursor-pointer font-bold text-lg  '>Home</div>
          <div className="flex items-center ">
            {
              filterD.map((user)=> <p className='font-bold'>{user.firstName}</p>)
            }

            <IoMdArrowDropdown className="text-3xl" onClick={dopDownHandler} />
            {dropDown ? (
              <div className='absolute right-0 top-10 bg-white shadow-md p-2'>
                <DropDown />
              </div>
            ) : null}
          </div>
          
        </div>
          ) : (
            null
          )}
        </div>
      )}
      
    </div>
  )
}

export default Navbar
