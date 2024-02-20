import React from 'react'
import { Link } from 'react-router-dom'

const SignupForm = ({
  email,
  password,
  confirmPassword,
  lastName,
  firstName,
  firstNameHandler,
  lastNameHandler,
  confirmPasswordHandler,
  passwordHandler,
  submitHandler,
  emailHandler,
  confirmPassError,
  emailError,
  passwordError,
  isValidate
}) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md'>
        <h1 className='text-3xl font-bold my-10 text-center'>Create an account</h1>
        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
          <div>
            <label htmlFor='firstName' className='block'>First Name</label>
            <input
              id='firstName'
              type='text'
              value={firstName}
              onChange={firstNameHandler}
              className='border-2 border-#3182ce p-[8px] mx-0 my-[5px] rounded-lg'
              placeholder='Enter your first name'
            />
          </div>
          <div>
            <label htmlFor='lastName' className='block'>Last Name</label>
            <input
              id='lastName'
              type='text'
              value={lastName}
              onChange={lastNameHandler}
              className='border-2 border-#3182ce p-[8px] mx-0 my-[5px] rounded-lg'              placeholder='Enter your last name'
            />
          </div>
          <div>
            <label htmlFor='email' className='block'>Email</label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={emailHandler}
              className='border-2 border-#3182ce p-[8px] mx-0 my-[5px] rounded-lg'
              placeholder='Enter your email'
            />
            {emailError && <p className='text-red-500 text-xs mt-1'>Enter a valid email address</p>}
          </div>
          <div>
            <label htmlFor='password' className='block'>Password</label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={passwordHandler}

              className='border-2 border-#3182ce p-[8px] mx-0 my-[5px] rounded-lg'
              placeholder='Enter your password'
            />
            {passwordError && <p className='text-red-500 text-xs mt-1'>Password must contain at least 8 characters <br /> including at least 1 letter and 1 number</p>}
          </div>
          <div>
            <label htmlFor='confirmPassword' className='block'>Confirm Password</label>
            <input
              id='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              className='border-2 border-#3182ce p-[8px] mx-0 my-[5px] rounded-lg'              placeholder='Confirm your password'
            />
            {confirmPassError && <p className='text-red-500 text-xs mt-1'>Password did not match</p>}
          </div>
          {isValidate && <p className='text-red-500 text-xs'>Please fill all the fields</p>}
          <p className='text-sm'>Already have an account? <Link to={'/'} className='text-blue-500'>Login here</Link></p>
          <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md font-semibold'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
