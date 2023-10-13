import React from 'react'
import Appbar from '../header/page'

function BookDetail() {
    return (
        <div>
            <header>
                <Appbar />
            </header>
            <div className='flex space-x-10 p-8 '>
                <div>
                    <div className="w-60 h-auto p-4 border border-gray-200 shadow-md flex flex-col items-start">
                        <div >
                            <img
                                src='/book1.png/'
                                className="w-74 h-100"
                                alt=""
                            />
                        </div>
                        <div>
                            <div class="flex flex-initial w-64">
                                <button className="mt-8 flex w-full justify-center rounded-sm bg-red-800
                      w-[150px] px-3 py-2 
                    text-sm font-semibold leading-2 text-white shadow-sm
                    mr-4">ADD TO BAG</button>

                                <button className="mt-8 flex w-full justify-center rounded-sm bg-black w-[160px]
                    px-3 py-2 text-sm font-semibold leading-2 text-white shadow-sm   
                    mr-4">WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="mt-2">
                            <div className="text-md text-slate-800 font-bold">Don't Make Me Think</div>
                        </div>
                        <div className="">
                            <div>by Steve Krug</div>
                        </div>
                        <div className="mt-1">
                            <div className='flex space-x-1.5'>
                                <button className='bg-green-700 w-[40px] text-xs h-auto text-white'>4.5 *</button>
                                <h1 className='text-xs'>(20)</h1>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-row space-x-2.5">
                            <h5 className='text-md font-bold text-xl'>Rs.1500</h5>
                            <h1 className='text-xs text-center mt-2 line-through '>Rs.2000</h1>
                        </div>
                    </div>
                    <div className='mt-10 pr-3.5'>
                        <h3>
                            <li>Book Detail</li>
                            <p className='mt-5'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt                        </p>
                        </h3>
                    </div>
                    <div className='mt-8'>
                        <h3>Customer Feedback</h3>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BookDetail
