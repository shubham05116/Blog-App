import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setConfirmPassword, setFirstName, setLastName, setPassword, setEmail } from '../store/slices/accountSlices/signUpslice'
import { setAccountDetails } from '../store/slices/accountSlices/accountDetails'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const dispatch = useDispatch()

    const firstName = useSelector((state) => state.signUp.firstName)
    const lastName = useSelector((state) => state.signUp.lastName)
    const email = useSelector((state) => state.signUp.email)
    const password = useSelector((state) => state.signUp.password)
    const confirmPassword = useSelector((state) => state.signUp.confirmPassword)

    const navigate = useNavigate();
    const [nav, setNav] = useState(false)

    const [error, setError] = useState(false)

    const firstNameHandler = (e) => {
        dispatch(setFirstName(e.target.value))
    }

    const lastNameHandler = (e) => {
        dispatch(setLastName(e.target.value))
    }

    const emailHandler = (e) => {
        dispatch(setEmail(e.target.value))
    }

    const passwordHandler = (e) => {
        dispatch(setPassword(e.target.value))
    }

    const confirmPasswordHandler = (e) => {
        if (password !== e.target.value) {
            setError(true)
        }
        else {
            setError(false)
        }
        dispatch(setConfirmPassword(e.target.value))
    }


    const data = useSelector((state) => state.account.data)
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setAccountDetails([...data, { firstName, lastName, email, password, confirmPassword }]));
        setNav(true)
    }
    if (nav) {
        navigate('/home')
        setNav(false);
    }

    useEffect(() => {
        const storedData = localStorage.getItem('UserData');
        if (storedData) {
            dispatch(setAccountDetails(JSON.parse(storedData)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('UserData', JSON.stringify(data));
    }, [data]);



    return (
        <div className='h-[100vh] flex justify-center flex-col items-center'>
            <h1 className='text-3xl font-bold my-10' >Create an account</h1>
            <form onSubmit={submitHandler} className='flex flex-col h-[100vh] md:w-[40%] '>
                <label >FirstName</label>
                <input className=' border-2 border-blue-400 rounded-md p-1 m-1 w-full' type="text" value={firstName}
                    onChange={firstNameHandler} placeholder='Enter your first name' />
                <br />

                <label htmlFor="">LastName</label>
                <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="text" value={lastName} onChange={lastNameHandler} placeholder='Enter your last name' />
                <br />

                <label htmlFor="">Email</label>
                <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="email" value={email} onChange={(emailHandler)} placeholder='Enter your email' />
                <br />

                <label htmlFor="">Password</label>
                <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="password" value={password} onChange={passwordHandler} placeholder='Enter your password' />
                <br />

                <label htmlFor="">Confirm Password</label>
                <input className='border-2 border-blue-400 rounded-md p-1 m-1' type="password" value={confirmPassword} onChange={confirmPasswordHandler} placeholder='Confirm your password' />
                {error && <p className='text-red-500'>Password did not match</p>}
                <p>Already have a account ? <Link to={'/'}>Login here</Link></p>
                <button className='bg-orange-400 px-10 py-2 rounded-lg font-bold text-white ' type="submit">SignUp
                    {
                        error && <p className='text-red-500'>Please fill all the fields</p>
                    }
                </button>
            </form>
        </div>
    )
}

export default SignUp


