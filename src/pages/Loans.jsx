import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BriefcaseBusiness, Wrench } from 'lucide-react';
import Card from '../components/Loans/Card';
import Table from '../components/Loans/Table';

const Loans = () => {
    const investments = [
        { id: 1, name: "Personal Loans", icon: <FaUser />, bgColor: "bg-[#E7EDFF]", investment: "$50,000", returnColor: "text-[#396AFFF]" },
        { id: 2, name: "Corporate Loans", icon: <BriefcaseBusiness />, bgColor: "bg-[#FFF3E0]", investment: "$100,000", returnColor: "text-[#FFBB38]" },
        { id: 3, name: "Business Loans", icon: <Wrench />, bgColor: "bg-[#FFE0BB]", investment: "$500,000", returnColor: "text-[#FF82AC]" },
        { id: 4, name: "Bank Loans", icon: <Wrench />, bgColor: "bg-[#DCFAF8]", investment: "$8,000", returnColor: "text-[#16DBDC]" },
    ];

    return (
        <div className="w-full flex items-center flex-col justify-center gap-10">
            <div className='flex items-center justify-center '>
                {investments.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        icon={item.icon}
                        bgColor={item.bgColor}
                        investment={item.investment}
                        returnColor={item.returnColor}
                    />

                ))}
            </div>
            <Table />
        </div>
    );
};

export default Loans;
