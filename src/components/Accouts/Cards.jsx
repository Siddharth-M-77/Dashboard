import React from 'react'
import Card from './Card'

const Cards = () => {
    
    return (
        <div className='flex items-center w-[1110px] justify-between gap-2  '>
            <Card textcolor="#FFBB38" bg="#FFF5D9" label="My Balance" income="$12,345" />
            <Card textcolor="#396AFF" bg="#E7EDFF" label="Expense" income="$5600" />
            <Card textcolor="#396AFF" bg="#E7EDFF" label="Income" income="$3460" />
            <Card textcolor="#396AFF" bg="#E7EDFF" label="Total Saving" income="$7,920" />

        </div>
    )
}

export default Cards
