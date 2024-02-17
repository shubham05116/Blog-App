import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword } from "../store/slices/accountSlices/loginSlice";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');

    const storedUserData = JSON.parse(localStorage.getItem('UserData'));
 console.log(storedUserData)


const found = storedUserData.find(element => element.email === email && element.password === password);

    if(found){
      console.log('Login Successful');
      navigate('/home');
    
    }
    else{
      console.log('Login Failed');
      setLoggedIn(true);
    }

  }
  


  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form onSubmit={submitHandler} className='flex flex-col' >

          <label className='font-semibold' htmlFor=""> Email
          </label>

          <input className='border-2 border-black rounded-md p-1 m-1'
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <br />

          <label className='font-semibold' htmlFor=""> Password 
          </label>
          <input
            className='border-2 border-blue-400 rounded-md p-1 m-1'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <br />
          {
            loggedIn && <p className='text-red-500'>Invalid Credentials</p>
          }
          <br />
          <p>Don't have an account ? <Link to={'/signup'}>Sign Up</Link> Now </p>
          <button className='bg-orange-400 px-10 py-2 rounded-lg font-bold text-white ' type="submit">
          Login
        
          </button>
        </form>
       
      </div>
    </>
  );
};

export default LoginForm;
