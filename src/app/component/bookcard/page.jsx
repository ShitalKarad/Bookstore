import React from 'react';
import BookDetail from '../bookdetail/page';
import Link from 'next/link';
import Appbar from '../header/page';

function BookCard() {

  return (
    <div >
      <div className=' justify-center flex'>
        <div className=' w-[1000px]  justify-start'>
          <div className="w-60 h-auto p-4 border border-gray-200 shadow-md  justify-center flex flex-col items-start">
            <div className="w-76 h-30 flex justify-center items-center ">
              <img
                src='/book1.png/'
                className="w-34 h-32 flex justify-cente"
                alt=""
              />
            </div>

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
        </div>
      </div>
    </div>
  );
}

export default BookCard;
