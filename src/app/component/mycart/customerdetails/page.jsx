import React from 'react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import OrderSummery from '../ordersummery/page.jsx';
import { userAddress } from '@/services/dataService.jsx';

function CustomerDetails() {
    const [isOrderSummeryOpen, setIsOrderSummeryOpen] = useState(false);
    const toggleOrderSummery = () => {
        setIsOrderSummeryOpen(!isOrderSummeryOpen);
    };

    const [data, setData] = useState({
        fullName: 'Shital Karad',
        mobileNumber: '9022357801',
        address: 'Tapwon',
        city: 'pune',
        state: 'Maharastra',
        addressType: 'home', 
    });

    console.log(data,'data');
    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const addressDetail = async (data) => {
        let res = await userAddress(data);
        console.log(res);
    };

    const handleDetails = () => {

        addressDetail(data);
    };

    return (
        <div>
            <div className='  justify-center flex p-8 '>
                <div className='w-[700px] p-4 border border-gray-200 justify-start '>
                    <div className='flex justify-between font-bold font-medium text-base leading-6 tracking-normal text-gray-700 opacity-100'>
                        <h2>Customer Details</h2>
                    </div>
                    <div className='flex pt-4 space-x-3.5 text-md leading-4'>
                        <div className='text-xs leading-6'>
                            <label htmlFor="fullName">Full Name</label>
                            <div className="flex-initial w-62">
                                <TextField
                                    fullWidth
                                    id="fullName"
                                    size="small"
                                    type="text"
                                    value={data.fullName}
                                    name="fullName"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='text-xs leading-6'>
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <div className="flex-initial w-62">
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="tel"
                                    variant="outlined"
                                    value={data.mobileNumber}
                                    name="mobileNumber"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-3 text-xs leading-6'>
                        <label htmlFor="address">Address</label>
                        <div className="flex-initial w-[464px]">
                            <TextField
                                fullWidth
                                type="text"
                                variant="outlined"
                                value={data.address}
                                name="address"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='flex pt-4 space-x-3.5 text-xs leading-6'>
                        <div>
                            <label htmlFor="city">City/town</label>
                            <div className="flex-initial w-62">
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="text"
                                    value={data.city}
                                    name="city"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='text-xs leading-6'>
                            <label htmlFor="state">State</label>
                            <div className="flex-initial w-62">
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="tel"
                                    variant="outlined"
                                    value={data.state}
                                    name="state"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-xs leading-6'>
                        <h2>Type</h2>
                        <div className="flex space-x-11">
                            <div className="flex items-center space-x-3">
                                <input type="radio" id="home" name="addressType" value="home" checked={data.addressType === 'home'} onChange={handleChange} />
                                <label htmlFor="home">Home</label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input type="radio" id="work" name="addressType" value="work" checked={data.addressType === 'work'} onChange={handleChange} />
                                <label htmlFor="work">Work</label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <input type="radio" id="other" name="addressType" value="other" checked={data.addressType === 'other'} onChange={handleChange} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div>
                            {isOrderSummeryOpen ? null : (
                                <button
                                    onClick={() => {
                                        toggleOrderSummery();
                                        handleDetails();
                                    }}
                                    className='ml-auto mr-3.5 text-xs flex justify-center rounded-6 py-1 px-4 flex-row-reverse text-white bg-indigo-700 w-auto 
                                    mb-4 font-normal text-base leading-4 tracking-normal text-white uppercase font-lato'  >
                                    continue
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isOrderSummeryOpen && <OrderSummery />}
        </div>
    );
}

export default CustomerDetails;
