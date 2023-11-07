'use client'
import React, { useState } from 'react';
import { removeCartItem, modifyCartItem } from '@/services/dataService';

function MyCartButton({ book,setDisplayButton , getCart , cartItem }) {
    console.log(book,'from mycartbutton');
    
   

    const calculateQuantity = async (props) => {
        let count
        if (props === 'Plus') {
            count = {
                quantityToBuy: book.quantityToBuy + 1,
            };

        } else {

            if (book.quantityToBuy === 1) {
                removeItem()
            } else {
                count = {
                    quantityToBuy: book.quantityToBuy - 1,
                };
            }
        }

        let response = await modifyCartItem(book._id, count)
        console.log(response)
         getCart()
    };

    const removeItem = async () => {
        //console.log(book._id)
        let response = await removeCartItem(book._id)
        setDisplayButton(true)
        console.log(response)
         getCart()
    }

   

    return (
        <div>
            <div className='mt-8 pr-3'>
                <div className=" flex flex-row space-x-1.5">
                    <button
                        className='bg-gray-100 flex justify-center border border-gray-200 w-6 h-6 rounded-full'
                        onClick={() => { calculateQuantity("Minus") }}> - </button>
                     <button className='border border-gray-200 w-14 h-6 '> { book?.quantityToBuy}</button> 
                    <button
                        className="bg-gray-100 border flex justify-center border-gray-200 w-6 h-6 rounded-full"
                        onClick={() => { calculateQuantity("Plus") }}> + </button>

                    {/* <button onClick={handleRemoveChange} >remove</button> */}
                </div>
            </div>
        </div>
    );
}

export default MyCartButton;
