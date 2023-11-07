'use client'
import React, { useState, useEffect } from 'react';
import Appbar from '../component/header/page';
import BookCard from '../component/bookcard/page';
import { getBooks } from '@/services/dataService';
import MyCart from '../component/mycart/page';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [searchToggle, setSearchToggle] = useState(false);
  const [filterData, setFilterData] = useState([]); // Initialize filterData as an empty array
  const [getData, setGetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

 
  useEffect(() => {

    const getBook = async () => {
      try {
        const response = await getBooks();
        const data = response.data.result;
        console.log(data,'from dasshboard');
        setGetData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    getBook();
  }, []);

  useEffect(() => {
    const searchResult = getData.filter((searchItem) =>
      searchItem.bookName.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(searchResult);

    if (search.length !== 0) {
      setSearchToggle(true);
    } else {
      setSearchToggle(false);
    }
  }, [ search.length]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (searchToggle ? filterData : getData).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(getData,'dashboard');

  return (
    <div>
      <header className='sm:w-auto'>
        <Appbar setSearch={setSearch} search={search} getData={getData} />
      </header>
      <div className='justify-center flex'>
        <div className='sm:w-auto md:w-[1000px] justify-start'>
          <div className='m-4 '>
            <div className='flex lg justify-between p-4'>
              <div className='flex space-x-1.5'>
                <h3 className='font-bold text-xl leading-6'>Books</h3>
                <h1 className='text-xs mt-2'>({searchToggle ? filterData.length : getData.length} items)</h1>
              </div>
              <select name="book" id="book" className='border border-gray-200 p-2 text-xs leading-6'>
                <option value="sort by relevance">Sort by relevance</option>
                <option value="price"> Price: low to high</option>
                <option value="price"> Price: high to low</option>
                <option value="price"> Newest Arrivals</option>
              </select>
            </div>
            <div className='mt-2 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {currentItems.map((book, index) => (
                <div key={index} className="p-4">
                  <BookCard book={book} />
                </div>
              ))} 
            </div>
            <div className="pagination">
              {Array.from({ length: Math.ceil((searchToggle ? filterData.length : getData.length) / itemsPerPage) }, (_, index) => (
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
