import React from 'react'
import { Link } from 'react-router-dom'


const SignupForm = ({ email, password, confirmPassword, lastName, firstName, firstNameHandler, lastNameHandler, confirmPasswordHandler, passwordHandler, submitHandler, emailHandler, confirmPassError, emailError, passwordError, isValidate }) => {


  return (
    <div>
      <div className='h-[100vh] flex justify-center flex-col items-center'>
        <h1 className='text-3xl font-bold my-10' >Create an account</h1>
        <form onSubmit={submitHandler} className='flex flex-col h-[100vh] md:w-[40%] '>
          <label >FirstName</label>
          <input id='firstName' className=' border-2 border-blue-400 rounded-md p-1 m-1 w-full' type="text" value={firstName}
            onChange={firstNameHandler} placeholder='Enter your first name' />
          <br />

          <label htmlFor="">LastName</label>
          <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="text" value={lastName} onChange={lastNameHandler} placeholder='Enter your last name' />
          <br />

          <label htmlFor="">Email</label>
          <input id='email' className='border-2 border-blue-400 rounded-md p-1 m-1' type="email" value={email} onChange={(emailHandler)} placeholder='Enter your email' />
          {
            emailError && <p className='text-red-500'>Enter a valid email address</p>
          }
          <br />

          <label htmlFor="">Password</label>
          <input id='password' className='border-2 border-blue-400 rounded-md p-1 m-1' type="password" value={password} onChange={passwordHandler} placeholder='Enter your password' />
          {passwordError && <p className='text-red-500'>Password must contain at least 8 characters <br /> including at least 1 letter and 1 number</p>}
          <br />

          <label htmlFor="">Confirm Password</label>
          <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="password" value={confirmPassword} onChange={confirmPasswordHandler} placeholder='Confirm your password' />
          {confirmPassError && <p className='text-red-500'>Password did not match</p>}
          {
            isValidate ? <p className='text-red-500'>Please fill all the fields</p> : null

          }
          <p>Already have a account ? <Link to={'/'}>Login here</Link></p>
          <button className='bg-orange-400 px-10 py-2 rounded-lg font-bold text-white ' type="submit">SignUp

          </button>
        </form>
      </div>
    </div>

  )
}

export default SignupForm
