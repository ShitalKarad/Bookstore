'use client'
import React from 'react'
import { TextField } from '@mui/material'
import { useState } from 'react'


function Comone({handleColorChange}) {

    const handleChange = (e) => {
        const newColor = e.target.value;
        handleColorChange(newColor);
      };

    return (
        <div>
            <div className="flex-initial w-64">
                <label htmlFor="name">Enter colour Name</label>
                <TextField
                    fullWidth
                    size="small"
                    type="text"
                    variant="outlined"
                    id="fullName"  
                    onChange={handleChange}
                />
            </div>
            
        </div>
    )
}

export default Comone