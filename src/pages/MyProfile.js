import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const MyProfile = () => {
    const storedUserData = useSelector((state) => state.account.data);
    const email = useSelector((state) => state.login.email);
    const signedUpEmail = useSelector((state) => state.signUp.signUpEmail);
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false);

    const filterData = storedUserData.filter((user) => {
        return user.signUpEmail === email;
    });

    const filterD = storedUserData.filter((user) => {
        return user.signUpEmail === signedUpEmail;
    });

    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        // Perform any validation if needed
        setSelectedImage(imageFile);
        setImageUploaded(true);
    }

    return (
        <div className="bg-gray-100">
            <Navbar />
            <p className="text-xl font-bold mb-4">This is the Profile Page</p>
            <input type="file" onChange={handleImageUpload} />
            {isLoggedIn ? (
                filterData.map((user, index) => {
                    return (
                        <div key={index} className="border rounded p-4 mb-4">
                            <p className="text-lg font-semibold">First Name: {user.firstName}</p>
                            <p className="text-lg font-semibold">Last Name: {user.lastName}</p>
                            <p className="text-lg font-semibold">Email: {user.signUpEmail}</p>
                            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Profile" className="mt-4" />}
                        </div>
                    );
                })
            ) : (
                filterD.map((user, index) => {
                    return (
                        <div key={index} className="border rounded p-4 mb-4">
                        {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Profile" className="mt-4 w-[100px]" />}
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
