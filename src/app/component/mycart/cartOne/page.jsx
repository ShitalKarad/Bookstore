import React from 'react'
import MyCart from '../page'
function CartOne() {
    return (
        <div>
            <div className=' justify-center flex p-15 '>
                <div className=' w-[700px]  border border-gray-200 justify-start '>
                    <div className='flex justify-between  p-4'>
                        <h2>My cart (1)</h2>
                        <select className='border border-gray-200' name="location" id="location">
                            <option value="Bridgelabz Solutions LLP, No">
                                <h2>Bridgelabz Solutions LLP, No</h2>
                            </option>
                        </select>
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
                            <div className="mt-2 flex flex-row space-x-2.5">
                                <button className='bg-gray-100 flex justify-center border  border-gray-200 w-6 h-6 rounded-full'>-</button>
                                <button className=' border  border-gray-200  w-9 h-6'>1</button>
                                <button className='bg-gray-100 border flex justify-center border-gray-200 w-6 h-6 rounded-full'>+</button>
                            </div>
                        </div>

                    </div>
                    <button className='ml-auto mr-3.5  text-xs flex justify-center rounded-6 py-1 px-3 flex-row-reverse text-white bg-indigo-700 w-auto mb-4  font-normal text-base leading-4 tracking-normal text-white uppercase font-lato'> PLACE ORDER</button>

                </div>
            </div>
        </div>
    )
}

export default CartOne