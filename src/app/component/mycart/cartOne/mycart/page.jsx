// 'use client'
// import React, { useState, useEffect } from 'react';
// import MyCartButton from '../mycartbutton/page';
// import BookCard from '@/app/component/bookcard/page';
// import { getCartItems, removeCartItem } from '@/services/dataService';
// import MyCardDetails from './myCartDetail/page';
// import BookDetail from '@/app/component/bookdetail/page';

// function MyCart() {
//     const [cartItems, setCartItems] = useState([]);
//     const [getData, setGetData] = useState([]);

//     const fetchCartItems = async () => {
//         try {
//             const response = await getCartItems();
//             if (response.data.result) {
//                 setCartItems(response.data.result);
//             }
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         }
//     }

//     useEffect(() => {
//         fetchCartItems();
//     }, []);

//     const handleRemoveItem = async (itemId) => {
//         try {
//             await removeCartItem(itemId);
//             fetchCartItems();
//         } catch (error) {
//             console.error('Error removing item from the cart:', error);
//         }
//     }

//     return (
//         <div className="justify-center flex p-12">
//             <div className="w-[900px] h-auto p-4 gap-x-9 justify-start flex">
//                 {cartItems.map((cartItem, index) => (
//                     <div key={index} className="p-4">
//                         <BookCard cartItem={cartItem} />
//                         <div className="flex flex-row space-x-1.5 text-black">
//                             <MyCartButton cartItem={cartItem.quantityToBuy} />

//                                 <button className='mt-4' onClick={() => handleRemoveItem(cartItem._id)}>Remove</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default MyCart;
'use client'
import React, { useState, useEffect } from 'react';
import MyCartButton from '../mycartbutton/page';
import { getCartItems, removeCartItem } from '@/services/dataService'

function MyCart({getCart,cartItems}) {
 

  useEffect(() => {
    getCart();
  }, []);

  const handleRemoveItem = async (itemId) => {
            try {
                await removeCartItem(itemId);
                getCart();
            } catch (error) {
                console.error('Error removing item from the cart:', error);
            }
        }
  return (
    <div className='justify-center flex p-12'>
      {cartItems.map((cartItem) => (
        <div key={cartItem.product_id._id} className="w-[700px] h-auto p-4 gap-x-9 justify-start flex">
          <div className="flex justify-start">
            <img src='/book1.png/' className="w-[100px] h-[100px] flex justify-center" alt="" />
          </div>
          <div>
            <div className="mt-2">
              <div className="text-md text-slate-800 font-bold">{cartItem.product_id.bookName}</div>
            </div>
            <div>
              <div className="text-xs text-gray-300"> {cartItem.product_id.author}</div>
            </div>
            <div className="mt-2 flex flex-row space-x-2.5">
              <h5 className='text-md font-bold text-xl'>Rs. {cartItem.product_id.price}</h5>
              <h1 className='text-xs text-gray-300 text-center mt-2 line-through'>Rs. {cartItem.product_id.originalPrice}</h1>
            </div>
            <div className="flex flex-row space-x-1.5">
              <MyCartButton book={cartItem} getCart={getCart} />
              <div>
                {/* <p>Quantity to Buy: {cartItem.quantityToBuy}</p> */}
               <button className='mt-7' onClick={() => handleRemoveItem(cartItem._id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCart;
