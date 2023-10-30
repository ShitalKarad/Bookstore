
'use client'
import React from 'react'
import MyCart from './mycart/page.jsx'
import MyCartButton from './mycartbutton/page.jsx'
import { useState } from 'react'
import CustomerDetails from '../customerdetails/page.jsx'
import OrderSummery from '../ordersummery/page.jsx'
import { OrderBook } from '@/services/dataService.jsx'

function CartOne() {

    const [isCustomerDetailsOpen, setIsCustomerDetailsOpen] = useState(false);
    const toggleCustomerDetails = () => {
        setIsCustomerDetailsOpen(!isCustomerDetailsOpen);
    };

    //const placeOrder

    return (
        <div>
            <div className=' justify-center flex '>
                <div className=' w-[700px]  border border-gray-200 justify-start '>
                    <div>
                        <div className='flex justify-between  p-4'>
                            <h2>My cart (1)</h2>
                            <select className='border border-gray-200' name="location" id="location">
                                <option value="Bridgelabz Solutions LLP, No">
                                    <h2>Bridgelabz Solutions LLP, No</h2>
                                </option>
                            </select>
                        </div>
                        <div>
                            <MyCart />
                        </div>
                        {/* <div >
                            <MyCartButton className='pl-12' />
                        </div> */}
                    </div>
                    <div>
                        {isCustomerDetailsOpen ? null : (
                            <button
                                onClick={toggleCustomerDetails}
                                className='ml-auto mr-3.5 text-xs flex justify-center rounded-6 py-1 px-3 flex-row-reverse text-white bg-indigo-700 w-auto mb-4 font-normal text-base leading-4 tracking-normal text-white uppercase font-lato'
                            >
                                PLACE ORDER
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {isCustomerDetailsOpen && <CustomerDetails />}
        </div>
    )
}

export default CartOne