'use client'
import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useRouter } from 'next/router';
import Link from 'next/link';
//import Image from 'next/image';
function Signup() {

    

    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
    });
    const [errors, setErrors] = useState({});

    const handlePassword = () => {
        setShowPassword((previous) => !previous);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateName = (name) => {
        const namePattern = /^[A-Z]{1}[A-Za-z ]{2,}$/;
        return namePattern.test(name);
    }

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const validateMobileNumber = (mobileNumber) => {
        const mobileNumberPattern = /^[0-9]{10}(\s|-)?[0-9]{0,2}(\s|-)?[0-9]{0,2}$/;
        return mobileNumberPattern.test(mobileNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.fullName.trim()) {
            validationErrors.fullName = 'Full Name is required';
        } else if (!validateName(formData.fullName)) {
            validationErrors.fullName = 'Invalid name format';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            validationErrors.password = 'Password is not strong enough';
        }

        if (!formData.mobileNumber.trim()) {
            validationErrors.mobileNumber = 'Mobile Number is required';
        } else if (!validateMobileNumber(formData.mobileNumber)) {
            validationErrors.mobileNumber = 'Invalid mobile number';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
        }
    };



    return (
        <div className="w-[100%] flex justify-center items-center bg-slate-400">
            <div className=" hidden md:flex md:h-[95%] md:w-[27%]  bg-slate-200  rounded-l-md flex justify-center items-center">
                <img src="logoImage.png" alt="" className='bg-transparent h-[245px] w-[245px] rounded-full my-20  ' />
            </div>
            <form className="space-y-4 shadow-lg  sm:w-full md:w-[28%] bg-white justify-center items-center py-8 my-10 flex flex-col" onSubmit={handleSubmit}>
                <div className="flex justify-between text-2xl font-medium leading-8 text-uppercase text-black flex-initial w-64 mb-1">
                    <Link href={"/login"}>
                        LOGIN
                    </Link>
                    <h2>SIGNUP</h2>
                </div>
                <div>
                    <label htmlFor="fullName" className="block text-[11px] font-medium leading-2 text-gray-900">
                        Full Name
                    </label>
                    <div className="flex-initial w-64">
                        <TextField
                            fullWidth
                            size="small"
                            type="text"
                            variant="outlined"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            error={errors.fullName !== undefined}
                            helperText={errors.fullName}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-[11px] font-medium leading-2 text-gray-900">
                        Email
                    </label>
                    <div className="flex-initial w-64">
                        <TextField
                            fullWidth
                            size="small"
                            type="email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            error={errors.email !== undefined}
                            helperText={errors.email}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-[11px] font-medium leading-2 text-gray-900">
                        Password
                    </label>
                    <div className="flex-initial w-64">
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            type={showPassword ? 'password' : 'text'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            error={errors.password !== undefined}
                            helperText={errors.password}
                            endAdornment={
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handlePassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            }
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="mobileNumber" className="block text-[11px] font-medium leading-2 text-gray-900">
                        Mobile Number
                    </label>
                    <div className="flex-initial w-64">
                        <TextField
                            fullWidth
                            size="small"
                            type="tel"
                            variant="outlined"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            required
                            error={errors.mobileNumber !== undefined}
                            helperText={errors.mobileNumber}
                        />
                    </div>
                </div>
                <div className="flex-initial w-64">
                    <button
                        type="submit"
                        className="mt-6 flex w-full justify-center rounded-sm bg-red-800 px-3 py-2 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4"
                    >
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;  
