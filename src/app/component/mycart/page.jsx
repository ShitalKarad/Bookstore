'use client'
import React, { useState, useEffect } from 'react'
import CartOne from './cartOne/page'
import CustomerDetails from './customerdetails/page'
import Appbar from '../header/page'

function MyCart() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [customerCart, setCustomerCart] = useState(false);

    const CustomerCart = () => {
        setCustomerCart(!customerCart);
    };


    return (

        <div>
           
            <header>
                <Appbar />
            </header>
            <div className='justify-center mt-2'>
                <div>
                    <div className='mt-6'>
                        <CartOne />
                    </div>
                </div>

                <div>
                    <div className='flex justify-center m-4'>
                        <div onClick={CustomerCart} className='w-[700px] flex justify-start p-2 border border-gray-200 
                        font-bold font-medium text-base leading-6 tracking-normal text-gray-700 opacity-100'>
                            <p >Customer Details (1) </p>
                        </div>
                    </div>

                    {(
                        customerCart && <CustomerDetails />
                    )}
                </div>
            </div>

        </div>
    )
}

export default MyCart;
