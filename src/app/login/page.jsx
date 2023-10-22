'use client'
import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login } from '@/services/userDetails';
import Cookies from 'js-cookie';

function Login() {

    const router = useRouter();
    const isLoginPage = router.pathname === '/login';
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(true);

    const handlePassword = () => {
        setShowPassword((previous) => !previous);
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        console.log("login")
        const res = await login(data);
        console.log("data", data);
        const token = res.data.result.accessToken;
        console.log(token, "token");
        Cookies.set('token', token)
        localStorage.setItem('token', token)
        console.log("res-->", res);
        router.push("/dashboard");

    }

    return (
        <div className='h-[100%] bg-slate-400'>
            <div className="w-[100%] h-[100%] flex justify-center items-center bg-slate-400 my-0">
                <div className=" hidden md:flex md:h-[95%] md:w-[26%]  bg-slate-200  rounded-1-md flex justify-center items-center">
                    <img src="logoImage.png" alt="" className='bg-transparent h-[245px] w-[245px] rounded-full my-16  ' />
                </div>
                <form className="space-y-4 shadow-lg  sm:w-full px-10 md:w-[28%] bg-white justify-center items-center py-8 my-20 flex flex-col" >
                    <div className="flex justify-between text-2xl  font-medium leading-8 text-uppercase text-black flex-initial w-64 mb-1">
                        <h2>
                            <h2 className={isLoginPage ? 'text-red-500 underline' : ''}>LOGIN</h2>
                        </h2>
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
                                id="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                                error={errors.email !== undefined}
                                helperText={errors.email} />
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
                                id="password"
                                value={data.password}
                                onChange={handleChange}
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
                            <div className="text-xs flex justify-end">
                                <h1 >Forget Password</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex-initial w-64">
                        <button
                            type="button"
                            className="mt-2 flex w-full justify-center rounded-sm bg-red-800 px-3 py-2 
                        text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-indigo-600 mr-4" onClick={submit}>
                            Login
                        </button>
                    </div>
                    <div>
                        <h2>OR</h2>
                    </div>
                    <div class="flex flex-initial w-64">
                        <button className="mt-2 flex w-full justify-center rounded-sm bg-indigo-700
                      w-[150px] px-3 py-2       
                    text-sm font-semibold leading-2 text-white shadow-sm hover:bg-gray-400
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-indigo-600 mr-4">Facebook</button>

                        <button className="mt-2 flex w-full justify-center rounded-sm bg-indigo-700 w-[160px]
                    px-3 py-2 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-gray-400 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600 mr-4">Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
