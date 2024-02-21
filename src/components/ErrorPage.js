import React from 'react';

const ErrorPage = () => {
    const clickHandler = () => {
        window.location.href = '/';
    };
    const signUpHandler = () => {
        window.location.href = '/signup';
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="https://images-platform.99static.com/Dky_MNpGbMm2_IVjFw1-n7IjY7E=/0x0:2040x2040/500x500/top/smart/99designs-contests-attachments/87/87475/attachment_87475616" alt="Error" className="mb-8 max-w-xs rounded-[50%]" />
            <p className="text-lg mb-4">Login to see this Page</p>
            <button onClick={clickHandler} className="border-2 px-5 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                Login
            </button>
            <p className="text-lg mb-4">Or
            </p>
            <button onClick={signUpHandler} className="border-2 px-5 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                SignUp
            </button>
            
        </div>
    );
};

export default ErrorPage;
