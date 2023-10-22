import React from 'react';
// import BookDetail from '../bookdetail/page';
// import Link from 'next/link';
// import Appbar from '../header/page';
import { useRouter } from 'next/navigation';

function BookCard({ book }) {
  const router = useRouter();
  const handleBookDetails = () => {
    console.log()
    router.push(`/component/bookdetail?id=${book._id}`)
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
                <div className="font-bold text-base text-md leading-2 tracking-normal text-black font-roboto  ">{book.bookName}</div>
              </div>
              <div className="mt-1">
                <div className=" text-xs  text-gray-400 ">{book.author}</div>
              </div>
              <div className="mt-1">
                <div className='flex space-x-1.5'>
                  <button className='bg-green-700 w-[40px] text-xs h-auto text-white'>4.5 *</button>
                  <h1 className='text-xs text-gray-400 '>(20)</h1>
                </div>
              </div>
              <div className="mt-1 flex flex-row space-x-2.5">
                <h5 className='text-md font-bold'>Rs.{book.discountPrice}</h5>
                <h1 className='text-xs text-center mt-1 text-gray-400 line-through '>Rs.{book.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
