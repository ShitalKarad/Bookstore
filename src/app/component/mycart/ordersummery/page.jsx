import React from 'react'

function OrderSummery() {
    return (
        <div>
            <div className=' justify-center flex p-15 '>
                <div className=' w-[800px]  border border-gray-200 justify-start '>
                    <div className='flex justify-between  p-4'>
                        <h2>Order Summery(1)</h2>
                    </div>
                    <div className="w-auto h-auto p-4 gap-x-9   flex ">
                        <div className=" flex justify-start ">
                            <img
                                src='/book1.png/'
                                className="w-[100px] h-28 flex justify-cente"
                                alt=""
                            />
                        </div>

                        <div>
                            <div className="mt-2">
                                <div className="text-md text-slate-800 font-bold">Don't Make Me Think</div>
                            </div>
                            <div >
                                <div className="text-xs text-gray-300">by Steve Krug</div>
                            </div>

                            <div className="mt-2 flex flex-row space-x-2.5">
                                <h5 className='text-md font-bold text-xl'>Rs.1500</h5>
                                <h1 className='text-xs   text-gray-300 text-center mt-2 line-through '>Rs.2000</h1>
                            </div>
                        </div>

                    </div>
                    <button className='ml-auto mr-3.5 flex justify-center rounded-4 py-2 px-3 flex-row-reverse text-white bg-indigo-700 w-auto mb-4 '>Checkout</button>

                </div>
            </div>
        </div>
    )
}

export default OrderSummery