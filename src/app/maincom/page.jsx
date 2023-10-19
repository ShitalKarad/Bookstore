'use client'
import { useState } from 'react'
import React from 'react'
import Comone from './comone/page'
import ComTwo from './comTwo/page'
function MainCom() {
    
    const [color, setColor] = useState('')

    const handleColorChange = (newColor) => {
        setColor(newColor);
      };
    

    return (
        <div className='flex justify-center'>
            <div className='m-10 p-10 justify-center w-[800px] border border-gray-200'>

                <div>
                    <Comone 
                    handleColorChange={handleColorChange}
                    />
                </div>
                <div>
                <ComTwo 
                divStyle={{ backgroundColor: color }}
                />
                </div>
            </div>
        </div>
    )
}

export default MainCom