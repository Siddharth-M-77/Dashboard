import React from 'react'

import Cards from '../components/Transtion.jsx/Cards'
import TransactionTable from '../components/Transtion.jsx/TransactionTable'

const Transactions = () => {

    return (
        <div className='flex flex-col items-center gap-4 p-4 mb-5'>
            <Cards />
            <TransactionTable />
            

        </div>
    )
}

export default Transactions
