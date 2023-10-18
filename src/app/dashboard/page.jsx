import React from 'react';
import Appbar from '../component/header/page';
import BookCard from '../component/bookcard/page';
import { Container } from '@mui/material';

function Dashboard() {
  return (

    <div>
      <header>
        <Appbar />
      </header >
      <div className=' justify-center flex'>
        <div className=' lg:w-[1000px]  xs:justify-center md:w-full w-[1000px] justify-start '>

          <div className='m-4 '>
            <div className='flex lg justify-between  p-4'>
              <div className='flex space-x-1.5'>
                <h3 className='font-bold text-xl leading-6'>Books</h3>
                <h1 className='text-xs mt-2'>
                  (128 items)
                </h1>
              </div>
              <select name="book" id="book" className='border border-gray-200 p-2  text-xs leading-6'>
                <option value="sort by relevance" >Sort by relevance</option>
                <option value="price"> Price:low to high</option>
                <option value="price"> Price:high to low</option>
                <option value="price"> Newest Arrivals</option>
              </select>
            </div>
            <div className='mt-2 sx'>
              <BookCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard