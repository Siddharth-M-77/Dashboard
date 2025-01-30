import React from 'react'
import Cards from '../components/CreditCard/Cards'
import { CreditCardIcon } from 'lucide-react'
import CardExpenseAndCardList from '../components/CreditCard/CardExpenseAndCardList';
import AddNewCardAndSetting from '../components/CreditCard/AddNewCardAndSetting';

const CreditCard = () => {

    return (
        <div className=''>
            <Cards />
            <div>
                <CardExpenseAndCardList />
            </div>
            <div className='mt-5 '>
                <AddNewCardAndSetting />
            </div>

        </div>
    )
}

export default CreditCard
