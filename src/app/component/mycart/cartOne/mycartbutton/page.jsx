import React, { useReducer } from 'react'


const quantityReducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

function MyCartButton() {

    const[quantity,dispatch] = useReducer(quantityReducer, 1);

    return (
        <div>

            <div className='mt-9 pr-3'>
                <div className=" flex flex-row space-x-1.5">
                    <button className='bg-gray-100 flex justify-center border 
                     border-gray-200 w-6 h-6 rounded-full' onClick={()=>dispatch({type:'decrement'})}>-</button>
                    <button className=' border  border-gray-200  w-14 h-6'>{quantity}</button>
                    <button className='bg-gray-100 border flex
                     justify-center border-gray-200 w-6 h-6 rounded-full' onClick={()=>dispatch({type:'increment'})}>+</button>
                </div>
            </div>



        </div>


    )
}

export default MyCartButton
