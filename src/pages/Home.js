import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from '../components/DropDown';
import { useSelector } from 'react-redux';
import MyBlogs from './MyBlogs';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [dropDown, setDropDown] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);
  const isSignedUp = useSelector(state => state.signUp.isSignedUp);
  const storedUser = useSelector(state => state.account.data);
  const signedEmail = useSelector(state => state.signUp.email);
  const signedPassword = useSelector(state => state.signUp.password);
  const [name , setName]= useState(null)


  const dopDownHandler = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
      const loggedInUser = storedUser.find(user => user.email === email && user.password === password);
      if (loggedInUser) {
        setFirstName(loggedInUser.firstName);
      console.log('logged in user', loggedInUser)
  }
  }, [isLoggedIn ]);

  useEffect(() => {
    const signedUpUser = storedUser.find(user => user.email === signedEmail && user.password === signedPassword);
    if (signedUpUser) {
        setName(signedUpUser.firstName);
        console.log('signed up user', signedUpUser)
    }
}, [isSignedUp])


  console.log('first name', name)
  return (
  
    <div>
      {isLoggedIn? (
        <div className='flex justify-between '>
        <div>
        <h1>Welcome to the Home Page</h1>
        <MyBlogs />
        </div>
          
          <div>
            {firstName && <p className='text-lg font-bold inline'>{firstName}</p>}
          
            <IoMdArrowDropdown onClick={dopDownHandler} />
            {dropDown ? (
              <div className='absolute right-0 top-10 bg-white shadow-md p-2'>
                <DropDown />
              </div>
            ) : null}
          </div>
          
        </div>
      ) : (
        <div>
        {
          isSignedUp ? (
            <div>
            <h1>This is Homepage</h1>
            <div>
            { <p className='text-lg font-bold inline'>{name}</p>}
         
          
            <IoMdArrowDropdown onClick={dopDownHandler} />
            {dropDown ? (
              <div className='absolute right-0 top-10 bg-white shadow-md p-2'>
                <DropDown />
              </div>
            ) : null}
          </div>
            </div>
          ) : (
            <h1>Welcome to the Home Page</h1>
          )

        }


        </div>
        
      )
      }
    </div>
  
  );
};

export default Home;
