import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    const { email, password, handleEmailChange, handlePasswordChange, submitHandler, emailError, isValid } = props;

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Login</h1>
                <form onSubmit={submitHandler} className='flex flex-col'>
                    <label htmlFor='email' className='font-semibold'>Email</label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        className={`border-2 rounded-md p-1 m-1 ${emailError ? 'border-red-500' : 'border-blue-500'}`}
                        placeholder='Enter your email'
                    />
                    {emailError && <p className='text-red-500'>Enter a valid email address</p>}

                    <label htmlFor='password' className='font-semibold'>Password</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        className={`border-2 rounded-md p-1 m-1 ${isValid ? 'border-red-500' : 'border-blue-400'}`}
                        placeholder='Enter your password'
                    />
                    {isValid && <p className='text-red-500'>Enter a valid password</p>}

                    <p className='mt-2'>Don't have an account? <Link to={'/signup'} className='text-blue-500'>Sign Up</Link> Now</p>

                    <button className='bg-blue-400 px-10 py-2 rounded-lg font-bold text-white mt-5' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
