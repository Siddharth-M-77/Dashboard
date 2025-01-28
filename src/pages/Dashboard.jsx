import React from 'react';
import Card from "../components/Dashboard/Card"
import TransactionCard from '../components/Dashboard/TransactionCard';
import { CreditCard, DollarSign } from 'lucide-react';

const Dashboard = () => {
    const transactions = [
        {
            icon: CreditCard,
            iconBg: "#FFF4E3",
            iconColor: "#FFC069",
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: -850,
        },
        {
            icon: DollarSign,
            iconBg: "#E8F0FF",
            iconColor: "#0070BA",
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: 2500,
        },
        {
            icon: DollarSign,
            iconBg: "#E5F9F4",
            iconColor: "#1FC091",
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: 5400,
        },
    ];
    return (
        <div className='w-full flex gap-4 items-center justify-center'>

            <section className='w-[730px]  h-[282px]'>
                <div className='flex items-center mb-4 justify-between'>
                    <h1>MY Cards</h1>
                    <h4>See All</h4>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    {/* First Card with blue background */}
                    <Card color="#1e3a8a" text="white" />

                    {/* Second Card with white background and black text */}
                    <Card color="white" text="black" />
                </div>
            </section>
            <section className="w-[350px]  flex flex-col gap-3 h-[282px] ">
                <h1 className="text-[#343C6A] text-xl font-semibold">Recent Transactions</h1>
                <TransactionCard transactions={transactions} />
            </section>

        </div>
    );
};

export default Dashboard;
