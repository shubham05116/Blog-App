import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setConfirmPassword, setFirstName, setLastName, setIsSignedUp, setSignedUpEmail, setSignedUpPassword } from '../store/slices/accountSlices/signUpslice'
import { setAccountDetails } from '../store/slices/accountSlices/accountDetails'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { toast } from 'react-toastify'
import SetCookies from '../hooks/SetCookies'

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    //formData:
    const firstName = useSelector((state) => state.signUp.firstName)
    const lastName = useSelector((state) => state.signUp.lastName)
    const signUpEmail = useSelector((state) => state.signUp.signUpEmail)
    const signUpPassword = useSelector((state) => state.signUp.signUpPassword)
    const confirmPassword = useSelector((state) => state.signUp.confirmPassword)
    const storedData = useSelector((state) => state.account.data)

    //error handling:
    const [confirmPassError, setConfirmPassError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [isValidate, setIsValidate] = useState(false)

    //formHandling:
    const firstNameHandler = (e) => {
        dispatch(setFirstName(e.target.value))
    }

    const lastNameHandler = (e) => {
        dispatch(setLastName(e.target.value))
    }

    const emailHandler = (e) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!emailRegex.test(e.target.value)) {
            document.getElementById('email').style.border = '2px solid red'
            setEmailError(true)
        }
        else {
            document.getElementById('email').style.border = ''
            setEmailError(false)
        }
        dispatch(setSignedUpEmail(e.target.value))
    }

    const passwordHandler = (e) => {
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
        if (!passwordRegex.test(e.target.value)) {
            document.getElementById('password').style.border = '2px solid red'
            setPasswordError(true)
        }
        else {
            document.getElementById('password').style.border = ''
            setPasswordError(false)
        }
        dispatch(setSignedUpPassword(e.target.value))
    }

    const confirmPasswordHandler = (e) => {
        if (signUpPassword !== e.target.value) {
            setConfirmPassError(true)
        }
        else {
            setConfirmPassError(false)
        }
        dispatch(setConfirmPassword(e.target.value))
    }


    const data = useSelector((state) => state.account.data)
    const submitHandler = (e) => {
        e.preventDefault();
        const isEmailExists = storedData.find((data) => data.email === signUpEmail)

        if (firstName === '' || lastName === '' || signUpEmail === '' || signUpPassword === '' || confirmPassword === '') {
            setIsValidate(true)
        }
        else {
            setIsValidate(false)
        }
        if (signUpPassword !== confirmPassword) {
            setConfirmPassError(true)
        }
        else if (confirmPassword === signUpPassword) {
            setConfirmPassError(false)
        }

        if (firstName !== '' && lastName !== '' && signUpEmail !== '' && signUpPassword !== '' && confirmPassword) {
            if (isEmailExists) {
                toast.error('Email already exists')
                setEmailError(true)

            }
            else if (emailError || passwordError || confirmPassError) {
                toast.error('Please enter a valid email address or password')
            }
            else {
                dispatch(setAccountDetails([...data, { firstName, lastName, signUpEmail, signUpPassword, confirmPassword }]));
                navigate('/home')
                dispatch(setIsSignedUp(true))
                toast.success('Account Created Successfully')
            }
        }
    }
    return (
        <>
            <SignupForm submitHandler={submitHandler} firstName={firstName} lastName={lastName} email={signUpEmail} password={signUpPassword} confirmPassword={confirmPassword} confirmPassError={confirmPassError} firstNameHandler={firstNameHandler} lastNameHandler={lastNameHandler} emailHandler={emailHandler} passwordHandler={passwordHandler} confirmPasswordHandler={confirmPasswordHandler} emailError={emailError} passwordError={passwordError} isValidate={isValidate} />
        </>

    )
}

export default SignUp


