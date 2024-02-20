import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from '../components/DropDown';
import { useSelector } from 'react-redux';
import MyBlogs from './MyBlogs';
import AllBlogs from '../components/AllBlogs';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [dropDown, setDropDown] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);
  const isSignedUp = useSelector(state => state.signUp.isSignedUp);
  const storedUser = useSelector(state => state.account.data);
  const signedEmail = useSelector(state => state.signUp.signedEmail);
  const signedPassword = useSelector(state => state.signUp.signedPassword);
  const [name , setName]= useState(null);

  const dopDownHandler = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
      const loggedInUser = storedUser.find(user => user.signUpEmail === email && user.signUpPassword === password);
      if (loggedInUser) {
        setFirstName(loggedInUser.firstName);
      }
  }, [isLoggedIn]);

  useEffect(() => {
    const signedUpUser = storedUser.find(user => user.email === signedEmail && user.password === signedPassword);
    if (signedUpUser) {
        setName(signedUpUser.firstName);
    }
  }, [isSignedUp]);

  return (
    <div>
    
      {isLoggedIn ? (

        <div className='flex justify-between items-center border-2 border-gray-400 bg-slate-200 shadow-xl mb-10'>
        <div>
            <h1 className="text-3xl font-bold ">All Blogs</h1>
          </div>
          <div className="flex items-center ">
            {firstName && <p className='text-lg font-bold inline mr-2'>{firstName}</p>}

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
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-10">All Blogs</h1>
              <div className="flex items-center">
                { <p className='text-lg font-bold inline mr-2'>{name}</p>}
                <IoMdArrowDropdown onClick={dopDownHandler} className="cursor-pointer" />
                {dropDown ? (
                  <div className='absolute right-0 top-10 bg-white shadow-md p-2'>
                    <DropDown  />
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <h1 className="text-3xl font-bold">All Blogs</h1>
          )}
        </div>
      )}
      <AllBlogs/>
    </div>
  );
};

export default Home;
