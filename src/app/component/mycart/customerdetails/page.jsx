import React from 'react'
import { TextField } from '@mui/material'

function CustomerDetails() {
    return (
        <div className=' justify-center flex p-8 '>
            <div className=' w-[900px]  p-16 border border-gray-200 justify-start '>
                <div className='flex justify-between '>
                    <h2>Customer Details (1)</h2>
                    <button className='border border-red-800 px-6 p-2'>Add New Address</button>
                </div>
                <div className='flex pt-4 space-x-3.5'>
                    <div >
                        <label htmlFor="fullName">
                            Full Name
                        </label>
                        <div className="flex-initial w-64">
                            <TextField
                                fullWidth
                                size="small"
                                type="text"
                                name="fullName"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mobileNumber">
                            Mobile Number
                        </label>
                        <div className="flex-initial w-64">
                            <TextField
                                fullWidth
                                size="small"
                                type="tel"
                                variant="outlined"
                                name="mobileNumber"

                            />
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <label htmlFor="address">Address</label>
                    <div className="flex-initial w-[530Px]">
                        <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="address"

                        />
                    </div>
                </div>

                <div className='flex pt-4 space-x-3.5'>
                    <div >
                        <label htmlFor="fullName">
                            City/town
                        </label>
                        <div className="flex-initial w-64">
                            <TextField
                                fullWidth
                                size="small"
                                type="text"
                                name="fullName"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mobileNumber">
                            State
                        </label>
                        <div className="flex-initial w-64">
                            <TextField
                                fullWidth
                                size="small"
                                type="tel"
                                variant="outlined"
                                name="mobileNumber"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Type</h2>
                    <div className="flex space-x-11">
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="home" name="type" value="home" />
                            <label htmlFor="home">Home</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="work" name="type" value="work" />
                            <label htmlFor="work">Work</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="other" name="type" value="other" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <button className='ml-auto mr-3.5 flex justify-center rounded-7 py-2 px-5 flex-row-reverse text-white bg-indigo-500 w-auto mb-4 '> Continue</button>

                </div>
            </div>
        </div>
    )
}

export default CustomerDetails
