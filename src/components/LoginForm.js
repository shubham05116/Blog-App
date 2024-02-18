import React ,{useState} from 'react'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {
    const email =props.email
    const password=props.password
    const handleEmailChange=props.handleEmailChange
    const handlePasswordChange=props.handlePasswordChange
    const submitHandler=props.submitHandler
    const emailError=props.emailError    
    const isValid=props.isValid
  return (
    <div>
       <div className='h-[100vh] flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form onSubmit={submitHandler} className='flex flex-col' >

          <label className='font-semibold' htmlFor=""> Email
          </label>
        

          <input className= {`border-2 rounded-md p-1 m-1 ${emailError ? 'border-red-500':' border-blue-500 '}`}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {
            emailError && <p className='text-red-500'>Enter a valid email address</p>
          }

          <label className='font-semibold' htmlFor=""> Password 
          </label>
          <input
            className={`border-2 ${isValid ? 'border-red-500':' border-blue-400' } rounded-md p-1 m-1`}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {
            isValid && <p className='text-red-500'>Enter a valid password </p>
          }
          <br />
          <p>Don't have an account ? <Link to={'/signup'}>Sign Up</Link> Now </p>
          <button className='bg-orange-400 px-10 py-2 rounded-lg font-bold text-white ' type="submit">
          Login
        
          </button>
        </form>
       
      </div>
    </div>
  )
}

export default LoginForm
