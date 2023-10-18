import React from 'react';
import Link from 'next/link'; // Import the Link component
import MyCart from '../cartOne/mycart/page';

function OrderSummary() {
    return (
        <div>
            <div className='justify-center flex'>
                <div className='w-[700px] border border-gray-200 justify-start'>
                    <div className='flex justify-between p-4 font-bold font-medium text-base leading-6 tracking-normal text-gray-700 opacity-100'>
                        <h2>Order Summary</h2>
                    </div>
                    <div>
                        <div>
                            <MyCart />
                        </div>
                    </div>
                    <div>
                        <Link  href="/ordersucessfully"> {/* Use Link to navigate to the OrderSuccess page */}
                            <a>
                                <button
                                    className='ml-auto mr-3.5 text-xs flex justify-center rounded-6 
                                    py-1 px-4 flex-row-reverse text-white bg-indigo-700 w-auto mb-4 
                                    font-normal text-base leading-4 tracking-normal text-white uppercase font-lato'
                                >
                                    Checkout
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
