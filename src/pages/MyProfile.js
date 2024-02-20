import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
    const storedData = useSelector((state) => state.account.data)
    const email= useSelector((state) => state.login.email)
    const signedUpEmail = useSelector((state) => state.signUp.email)

const filterData = storedData.filter((user) => {
    return user.email === email })

    const filterD= storedData.filter((user) => {
        return user.email === signedUpEmail })
        const isLoggedIn= useSelector((state) => state.login.isLoggedIn)

  return (
    <div>
      <p>This is the Profile Page </p>
      {
            isLoggedIn ?
            filterData.map((user) => {
                return (
                    <div>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>

                    </div>
                )
            })
    :
            filterD.map((user) => {
                return (
                    <div>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        </div>
                )
      })
      }

    </div>
  )
}

export default MyProfile
