import { BadgeDollarSign } from 'lucide-react'
import React from 'react'

const Card = ({ textcolor, bg, label, income }) => {
    return (
        <div className='w-[255px] h-[120px] bg-white p-5 shadow-md rounded-[25px]'>
            <div className='flex items-center gap-5'>

                <div className='left w-[70px] h-[70px] rounded-full flex items-center justify-center'
                    style={{ backgroundColor: bg, color: textcolor }}>
                    <BadgeDollarSign />
                </div>
                <div className='right'>
                    <h2 className='text-[16px] opacity-75'>{label}</h2>
                    <h1 className='text-[25px] font-bold'>{income}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
