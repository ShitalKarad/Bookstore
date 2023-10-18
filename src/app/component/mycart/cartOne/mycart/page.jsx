import React from 'react'

function MyCart() {
    return (
        <div className=' justify-center flex p-15 '>
            <div className="w-[700px] h-auto p-4 gap-x-9  justify-start  flex ">
                <div className=" flex justify-start ">
                    <img
                        src='/book1.png/'
                        className="w-[100px] h-[100px] flex justify-cente"
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
        </div>
    )
}

export default MyCart