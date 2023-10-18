import React from 'react';
import BookDetail from '../bookdetail/page';
import Link from 'next/link';
import Appbar from '../header/page';
import { useRouter } from 'next/navigation';

function BookCard({book}) {
  const router = useRouter();
  const handleBookDetails = ()=>{
    router.push('/component/bookdetail',{state:book})
    // <BookDetail 
    // // book = {book}
    // >
  }
  
  return (
    <div >
      <div className=' justify-center flex'>
        <div className=' w-[1000px]  justify-start'>
          <div className=" w-[225px] h-[275px] border border-gray-300 shadow-xs  justify-center flex flex-col ">
            <div className="p-4  flex justify-center items-center bg-gray-200 ">
              <img
                src='/book1.png/'
                className="w-[95px] h-[125px] flex justify-cente"
                alt=""
                onClick={handleBookDetails}
              />
            </div>

            <div className='p-4'>
              <div>
                <div className="font-bold text-base leading-4 tracking-normal text-black font-roboto  ">{book.description}</div>
              </div>
              <div className="mt-1">
                <div className='font-normal text-xs leading-4 tracking-normal font-roboto text-gray-500'>{book.author}</div>
              </div>
              <div className="mt-1">
                <div className='flex space-x-1.5'>
                  <button className='bg-green-700 w-[40px] text-xs h-auto text-white'>4.5 *</button>
                  <h1 className='text-xs'>(20)</h1>
                </div>
              </div>
              <div className="mt-1 flex flex-row space-x-2.5">
                <h5 className='text-md font-bold'>Rs.{book.discountPrice}</h5>
                <h1 className='text-xs text-center mt-1 line-through '>Rs.{book.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
