'use client'
import React, { useEffect, useState } from 'react'
import Appbar from '../header/page'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { IconButton } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { getBooks } from '@/services/dataService';

function BookDetail() {
    const [book,setBook] = useState({});
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    console.log("id",id);
   const getSingleBooks = async()=> {
    let res = await getBooks();
    const books = res.data.result
    const singleBook = books.filter((item) => item._id === id);
    setBook(singleBook[0]);
   }
   console.log(book);

   useEffect(()=> {
    getSingleBooks();
   },[])

    return (
        <div>
            <header>
                <Appbar />
            </header>

            <div className=' justify-center flex p-8'>

                <div className=' w-[1000px] justify-start '>
                    <div className='justify-flex'>
                        <h2 className='ml-100'>Home / Book(01)</h2>
                    </div>
                    <div className='flex space-x-10 p-8 '>
                        <div className=''>
                            <div className="w-auto h-auto p-6 justify-center border border-gray-200 shadow-md flex flex-col items-start">
                                <div >
                                    <img
                                        src='/book1.png/'
                                        className="w-[260px] h-[290px]"
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
                            <div class="border-b-2 border-gray-200 pb-3.5 ">
                                <div className="mt-2">
                                    <div className="text-md text-slate-800 font-bold">{book.bookName}</div>
                                </div>
                                <div >
                                    <div>{book.author}</div>
                                </div>
                                <div className="mt-1">
                                    <div className='flex space-x-1.5'>
                                        <button className='bg-green-700 w-[40px] text-xs h-auto text-white'>4.5 *</button>
                                        <h1 className='text-xs'>(20)</h1>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-row space-x-2.5">
                                    <h5 className='text-md font-bold text-xl'>{book.discountPrice}</h5>
                                    <h1 className='text-xs text-center mt-2 line-through '>{book.price}</h1>
                                </div>
                            </div>
                            <div className='mt-6 pr-3.5 border-b-2 border-gray-200 pb-3.5 '>
                                <h3>
                                    <li>Book Detail</li>
                                    <p className='mt-5'>
                                        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt                        */} {book.description}</p> 
                                </h3>
                            </div>
                            <div className='mt-6'>
                                <h3>Customer Feedback</h3>
                                <div className='bg-gray-200 h-[160px] flex flex-col mt-6'>
                                    <div>
                                        <h2 class="px-2.5">Overall rating</h2>
                                    </div>
                                    <div>
                                        <IconButton>
                                            <StarBorderOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                            <StarBorderOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                            <StarBorderOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                            <StarBorderOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                            <StarBorderOutlinedIcon />
                                        </IconButton>
                                    </div>

                                    <box className='bg-white h-[45px] p-1.5 m-2.5 '>
                                        <h2 className='text-black'>Write your review  </h2>
                                    </box>

                                    <button className='ml-auto mr-2.5 flex justify-center  flex-row-reverse bg-indigo-500 w-[70px] mb-4 '> submit</button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className='flex space-x-2.5'>
                                    <button className='bg-gray-200 border  px-0.5 border-gray-400 rounded-full'>AC</button>
                                    <h2>Aniket Chile</h2>
                                </div>
                                <div className='ml-6'>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon />
                                    </IconButton>
                                </div>
                                <div>
                                    <p className='ml-9'>Good product.Even though the transition could have been better </p>
                                </div>

                            </div>

                            <div className='mt-4'>
                                <div className='flex space-x-2.5'>
                                    <button className='bg-gray-200 border  p-0.5 border-gray-400 rounded-full'>SB</button>
                                    <h2>Shweta Bodkar</h2>
                                </div>
                                <div className='ml-6'>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon style={{ color: 'yellow' }} />
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon />
                                    </IconButton>
                                </div>
                                <div>
                                    <p className='ml-9'>Good product.Even though the transition could have been better </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

)
}

export default BookDetail
