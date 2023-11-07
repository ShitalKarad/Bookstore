'use client'
import React from 'react';
import MyCart from './mycart/page.jsx';
import { useState } from 'react';
import CustomerDetails from '../customerdetails/page.jsx';
import { getCartItems } from '@/services/dataService';

function CartOne() {
  const [isCustomerDetailsOpen, setIsCustomerDetailsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const getCart = async () => {
    if (!isFetched) {
      const response = await getCartItems();
      setCartItems(response.data.result);
      setIsFetched(true);
    }
  };

  const canPlaceOrder = cartItems.length > 0;

  const toggleCustomerDetails = () => {
    if (canPlaceOrder) {
      setIsCustomerDetailsOpen(!isCustomerDetailsOpen);
    } else {
      // Display a message when cart is empty
      alert('Add books to your cart before placing an order.');
    }
  };

  return (
    <div>
      <div className=' justify-center flex '>
        <div className=' w-[700px]  border border-gray-200 justify-start '>
          <div>
            <div className='flex justify-between  p-4'>
              <h2>My cart {cartItems.length}</h2>
              <select className='border border-gray-200' name='location' id='location'>
                <option value='Bridgelabz Solutions LLP, No'>
                  <h2>Bridgelabz Solutions LLP, No</h2>
                </option>
              </select>
            </div>
            <div>
              <MyCart getCart={getCart} cartItems={cartItems} />
            </div>
          </div>
          <div>
            {isCustomerDetailsOpen ? (
              <CustomerDetails />
            ) : (
              <button
                onClick={toggleCustomerDetails}
                className='ml-auto mr-3.5 text-xs flex justify-center rounded-6 py-1 px-3 flex-row-reverse text-white bg-indigo-700 w-auto mb-4 font-normal text-base leading-4 tracking-normal text-white uppercase font-lato'
              >
                PLACE ORDER
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartOne;
