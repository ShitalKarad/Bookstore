'use client'
import React, { useState, useEffect } from 'react';
import Appbar from '../component/header/page';
import BookCard from '../component/bookcard/page';
import { getBooks } from '@/services/dataService';

function Dashboard() {
  const [getData, setGetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  const getBook = async () => {
    try {
      const response = await getBooks();
      const data = response.data.result;
      setGetData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getData.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <header>
        <Appbar />
      </header>
      <div className='justify-center flex'>
        <div className='lg:w-[1000px] xs:justify-center md:w-full w-[1000px] justify-start'>
          <div className='m-4 '>
            <div className='flex lg justify-between p-4'>
              <div className='flex space-x-1.5'>
                <h3 className='font-bold text-xl leading-6'>Books</h3>
                <h1 className='text-xs mt-2'>({getData.length} items)</h1>
              </div>
              <select name="book" id="book" className='border border-gray-200 p-2 text-xs leading-6'>
                <option value="sort by relevance">Sort by relevance</option>
                <option value="price"> Price: low to high</option>
                <option value="price"> Price: high to low</option>
                <option value="price"> Newest Arrivals</option>
              </select>
            </div>
            <div className='mt-2 sx'>
              <div className="flex flex-wrap">
                {currentItems.map((book, index) => (
                  <div key={index} className="w-1/4 p-4">
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination">
              {Array.from({ length: Math.ceil(getData.length / itemsPerPage) }, (_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
