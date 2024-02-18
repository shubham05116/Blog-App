import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setIsLoggedIn, setPassword, setPrivateRoute } from "../store/slices/accountSlices/loginSlice";
import {  useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { toast } from 'react-toastify';

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //formData:
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);
  const storedUserData = useSelector(state => state.account.data);

    //error handling:
    const [emailError , setEmailError]=useState(false)
    const [isValid , setIsValid]=useState(false)

  const handleEmailChange = (event) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!emailRegex.test(event.target.value)) {
      setEmailError(true)
    }
    else {
      setEmailError(false)
    }
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(email === '' && password === ''){
      toast.error('Email and Password cannot be empty')
    }
   else if (email === '') {
      toast.error('Email cannot be empty')
      setIsValid(true)
      setEmailError(true)
      
    }
    else if (email !== '' && password === '') {
      toast.error('Password cannot be empty')
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }

    dispatch(setPrivateRoute(true))

    const found = storedUserData.find(element => element.email === email && element.password === password);

    if (found && email !== '' && password !== '') {
      console.log('Login Successful');
      navigate('/home');
      dispatch(setIsLoggedIn(true))
      toast.success('Logged In successfully')
      

      dispatch(setEmail(''));
      dispatch(setPassword(''));
    }
    else {
      console.log('Login Failed');
      setIsValid(true)
    }
  }


  return (
    <>
      <LoginForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        submitHandler={submitHandler}
        emailError={emailError}
        isValid={isValid}

      />

    </>
  );
};

export default Login;
