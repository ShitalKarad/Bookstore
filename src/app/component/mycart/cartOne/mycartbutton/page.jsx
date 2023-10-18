import React from 'react'
function MyCartButton() {
    return (
        <div>
            <div className=' w-[700px] ml-40 '>
                <div>
                    <div className=" flex flex-row space-x-1.5">
                        <button className='bg-gray-100 flex justify-center border  border-gray-200 w-6 h-6 rounded-full'>-</button>
                        <button className=' border  border-gray-200  w-14 h-6'>1</button>
                        <button className='bg-gray-100 border flex justify-center border-gray-200 w-6 h-6 rounded-full'>+</button>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default MyCartButton
