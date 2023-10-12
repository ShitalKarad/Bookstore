'use client'
import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

function Login() {
    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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


    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

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

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission or further actions
        }
    };

    return (
        <div className="w-[100%]  flex justify-center items-center bg-slate-400">
            <div className=" hidden md:flex md:h-[95%] md:w-[26%]  bg-slate-200  rounded-1-md flex justify-center items-center">
                <img src="logoImage.png" alt="" className='bg-transparent h-[245px] w-[245px] rounded-full my-16  '  />
            </div>
            <form className="space-y-4 shadow-lg  sm:w-full md:w-[28%] bg-white justify-center items-center py-8 my-10 flex flex-col" onSubmit={handleSubmit}>
                <div className="flex justify-between text-2xl font-medium leading-8 text-uppercase text-black flex-initial w-64 mb-1">
                    <h2>LOGIN</h2>
                    <Link href={"/signup"}>
                        SIGNUP
                    </Link>
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

                <div className="flex-initial w-64">
                    <button
                        type="submit"
                        className="mt-6 flex w-full justify-center rounded-sm bg-red-800 px-3 py-2 
                        text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-indigo-600 mr-4"
                    >
                        Login
                    </button>
                </div>
                <div>
                    <h2>OR</h2>
                </div>
                <div class="flex flex-initial w-64">
                    <button className="mt-4 flex w-full justify-center rounded-sm bg-gray-400
                      w-[150px] px-3 py-2 
                    text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-indigo-600 mr-4">Facebook</button>

                    <button className="mt-4 flex w-full justify-center rounded-sm bg-gray-400 w-[160px]
                    px-3 py-2 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600 mr-4">Google</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
