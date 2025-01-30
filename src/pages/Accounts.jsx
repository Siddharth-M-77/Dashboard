import React from 'react'
import Card from '../components/Accouts/Card'
import Cards from '../components/Accouts/Cards'
import LastTransaction from '../components/Accouts/LastTransaction'
import DebitCreditGraph from '../components/Accouts/DebitCreditGraph'

const Accounts = () => {
    return (
        <div className='w-full px-4 py-4 flex flex-col items-center justify-center'>
            <Cards />
            <LastTransaction />
            <DebitCreditGraph />
            
        </div>
    )
}

export default Accounts
