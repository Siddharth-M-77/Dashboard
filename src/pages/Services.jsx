import React from 'react'
import { Apple, Banknote, Bitcoin, Briefcase } from 'lucide-react';
import Header from '../components/Investment.jsx/Header';
import BankServicesList from '../components/services/BankServices';

const Services = () => {
    const investments = [
        { id: 1, name: "Apple", category: "E-commerce, Marketplace", icon: <Apple />, bgColor: "bg-[#FFE0EB]", investment: "$5400", returnValue: "+16%", returnColor: "text-green-400" },
        { id: 2, name: "Bitcoin", category: "Cryptocurrency", icon: <Bitcoin />, bgColor: "bg-[#FFF3E0]", investment: "$12,000", returnValue: "+24%", returnColor: "text-green-400" },
        { id: 3, name: "Bank", category: "Fixed Deposits", icon: <Banknote />, bgColor: "bg-[#E0F7FA]", investment: "$8000", returnValue: "+8%", returnColor: "text-green-400" },

    ];

    return (
        <div className='flex flex-col gap-5 items-center'>

            <div className='w-[1110px] h-[120px] mt-8  gap-6 flex items-center justify-center'>
                {
                    investments.map((item, i) => (
                        <Header key={i} name={item.name} category={item.category} icon={item.icon} bgColor={item.bgColor} />
                    ))
                }
            </div>
            <BankServicesList/>


        </div>
    )
}

export default Services
