'use client'
import React, { useState, useEffect } from 'react';
import Appbar from '../component/header/page';
import Link from 'next/link';

function OrderSuccess() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <header>
        <Appbar />
      </header>
      <div className='justify-center flex p-15'>
        <div className='w-[800px]'>
          <div className="w-auto h-auto p-6 flex flex-col items-center justify-center">
            <div>
              <img
                src='/success.png/'
                className="w-[200px] h-[180px]"
                alt=""
              />
            </div>

            <div className='mt-6'>
              <p className="text-center font-normal text-base leading-6 tracking-normal text-gray-700 opacity-100 font-lato">
                hurry!!! your order is confirmed <br />
                the order id is #1223456 save the order id for <br />
                further communication
              </p>
            </div>

            <div className='mt-6 lg:w-[751px]'>
              {isClient && (
                <table className="w-full text-xs border-collapse border text-center text-base font-normal leading-normal text-gray-700">
                  <tr>
                    <th className="border p-2">Email Us</th>
                    <th className="border p-2">Contact Us</th>
                    <th className="border p-2">Address</th>
                  </tr>
                  <tr>
                    <td className="border p-4">shitalkarad24@gmail.com</td>
                    <td className="border p-4">(123) 456-7890</td>
                    <td className="border p-4">123 Main St, City</td>
                  </tr>
                </table>
              )}
            </div>

            <div className='mt-6'>

              <Link href="/dashboard">

                <button className="ml-auto mr-3.5 flex justify-center text-xs rounded-sm px-5 flex-row-reverse text-white bg-indigo-700 w-auto mb-4 text-base font-medium leading-6 tracking-normal p-1 uppercase">
                  Continue Shopping
                </button>

              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
