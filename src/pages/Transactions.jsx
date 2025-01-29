import React from 'react'
import Card from '../components/Dashboard/Card'
import TransactionCard from '../components/Dashboard/TransactionCard'

const Transactions = () => {
    return (
        <div className='flex w-full items-center justify-center gap-8'>
            <section className='w-[730px] h-[282px]'>
                <div className='flex items-center text-[#343C6A] mb-4 px-4 font-semibold justify-between'>
                    <h1>MY Cards</h1>
                    <h4>See All</h4>
                </div>
                <div className='flex gap-8 items-center justify-center'>
                    {/* First Card with blue background */}
                    <Card color="#1e3a8a" text="white" />

                    {/* Second Card with white background and black text */}
                    <Card color="white" text="black" />
                </div>
            </section>
            <section className="w-[350px]  flex flex-col gap-3 h-[282px] ">
                <h1 className="text-color text-xl font-semibold">My Expense</h1>
                <div className='w-[350px] h-[225px] bg-white shadow-2xl rounded-2xl'>

                </div>
            </section>
        </div>
    )
}

export default Transactions
