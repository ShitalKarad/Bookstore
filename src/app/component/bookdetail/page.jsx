'use client'
import React, { useEffect, useState } from 'react'
import Appbar from '../header/page'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { IconButton } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { getBooks } from '@/services/dataService';
import MyCartButton from '../mycart/cartOne/mycartbutton/page';
import { getCartItems } from '@/services/dataService';
import { addCartItem } from '@/services/dataService';


function BookDetail() {
    const[displayButton, setDisplayButton] =useState(true);

    

    const [book, setBook] = useState({});

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const getSingleBooks = async () => {
        let res = await getBooks();
        const books = res.data.result
        const singleBook = books.filter((item) => item._id === id);
        setBook(singleBook[0]);
    }
    console.log(book);
   
     console.log(book,"bo");

    const handleButtonChange = () =>{
        addToCart(id)
        setDisplayButton((prevState) => !prevState);
        
    }

    

    const getCart = async () => {
        // let response = await getCartItems()
        // console.log( "res from getcartitem",response)
        // return response

        let response = await getCartItems()
        console.log(book._id)

        for (let i = 0; i < response.data.result.length; i++) {
            if (response.data.result[i]?.product_id._id === book._id) {
                let itemNo = response.data.result[i].quantityToBuy
                console.log(itemNo)
                setBook(response.data.result[i])
                setDisplayButton(false)
            }
        }



    }

    const addToCart = async (id) => {
        let response = await addCartItem(id)
        console.log(response)
        await getCart()
        return response
        
    }

    useEffect(() => {
        getCart();
        getSingleBooks();
       
    }, [])

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
                                    <div class="flex w-[275px]">
                                        { displayButton ? 
                                            (<button className="mt-8 flex w-full justify-center rounded-sm bg-red-800
                                         w-[150px] px-3 py-2 
                                        text-sm font-semibold leading-2 text-white shadow-sm
                                         mr-4" onClick={handleButtonChange}>ADD TO BAG</button>
                                         ) : 
                                         (<MyCartButton book={book} setDisplayButton={setDisplayButton} getCart={getCart}  />)
                                         }

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
                                    <div className='text-xs text-gray-400'>{book.author}</div>
                                </div>
                                <div className="mt-1.5">
                                    <div className='flex space-x-1.5'>
                                        <button className='bg-green-700 w-[40px] text-xs h-auto text-white'>4.5 *</button>
                                        <h1 className='text-xs  text-gray-400'>(20)</h1>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-row space-x-2.5">
                                    <h5 className='text-md font-bold text-xl'> Rs.{book.discountPrice}</h5>
                                    <h1 className='text-xs text-center mt-2 line-through  text-gray-400 '>{book.price}</h1>
                                </div>
                            </div>
                            <div className='mt-4 pr-3.5 border-b-2 border-gray-200 pb-2.5 '>
                                <h3>
                                    <h1 className=' font-normal text-md'>Book Detail</h1>
                                    <p className='mt-1 text-xs'>
                                        {book.description}</p>
                                </h3>
                            </div>
                            <div className='mt-4'>
                                <h3>Customer Feedback</h3>
                                <div className='bg-gray-200 h-[160px] flex flex-col mt-4'>
                                    <div>
                                        <h2 class="px-2.5 text-xs">Overall rating</h2>
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
                                        <h2 className='text-gray-200'>Write your review  </h2>
                                    </box>

                                    <button className='ml-auto mr-2.5 flex justify-center  flex-row-reverse bg-indigo-500 w-[70px] mb-4 '> submit</button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className='flex space-x-2.5'>
                                    <button className='bg-gray-200 border  text-xs  w-6 h-6 border-gray-400 rounded-full'>AC</button>
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
                                    <p className='ml-9 text-xs'>Good product.Even though the transition could have been better </p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex space-x-2.5'>
                                    <button className='bg-gray-200 border w-6 h-6 text-xs border-gray-400 rounded-full'>SB</button>
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
                                    <p className='ml-9 text-xs'>Good product.Even though the transition could have been better </p>
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