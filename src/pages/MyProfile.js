import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
    const storedUserData = useSelector((state) => state.account.data);
    const email = useSelector((state) => state.login.email);
    const signedUpEmail = useSelector((state) => state.signUp.signUpEmail);

    const filterData = storedUserData.filter((user) => {
        return user.signUpEmail === email;
    });

    const filterD = storedUserData.filter((user) => {
        return user.signUpEmail === signedUpEmail;
    });

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return (
        <div className="p-4 bg-gray-100">
            <p className="text-xl font-bold mb-4">This is the Profile Page</p>
            {isLoggedIn ? (
                filterData.map((user, index) => {
                    return (
                        <div key={index} className="border rounded p-4 mb-4">
                            <p className="text-lg font-semibold">First Name: {user.firstName}</p>
                            <p className="text-lg font-semibold">Last Name: {user.lastName}</p>
                            <p className="text-lg font-semibold">Email: {user.signUpEmail}</p>
                        </div>
                    );
                })
            ) : (
                
                filterD.map((user, index) => {
                    return (
                        <div key={index} className="border rounded p-4 mb-4">
                            <p className="text-lg font-semibold">First Name: {user.firstName}</p>
                            <p className="text-lg font-semibold">Last Name: {user.lastName}</p>
                            <p className="text-lg font-semibold">Email: {user.signUpEmail}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default MyProfile;
