import React from 'react';
import Card from "../components/Dashboard/Card"
import TransactionCard from '../components/Dashboard/TransactionCard';
import { ChevronRight, CreditCard, DollarSign, Send } from 'lucide-react';
import WeeklyActivityChart from '../components/Dashboard/WeeklyActivityChart';
import PieChart from '../components/Dashboard/PieChart';
import BalanceHistory from '../components/Dashboard/BalanceHistory';

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
    const data = []
    return (
        <div className='w-full flex gap-4 flex-col  justify-center'>

            {/* main section */}
            <div className='flex w-full items-center justify-center gap-8'>
                <section className='w-[730px]  h-[282px]'>
                    <div className='flex items-center text-[#343C6A] mb-4 px-4 font-semibold justify-between'>
                        <h1 className='text-[22px]'>MY Cards</h1>
                        <h4 className='text-[17px]'>See All</h4>
                    </div>
                    <div className='flex gap-8 items-center justify-center'>
                        {/* First Card with blue background */}
                        <Card color="#1e3a8a" text="white" circle="white" />

                        {/* Second Card with white background and black text */}
                        <Card color="white" text="black" circle="black" />
                    </div>
                </section>
                <section className="w-[350px]  flex flex-col gap-3 h-[282px] ">
                    <h1 className="text-[#343C6A] text-[22px] font-semibold">Recent Transactions</h1>
                    <TransactionCard transactions={transactions} />
                </section>
            </div>
            {/* graph section */}
            <div className='flex items-center justify-center  gap-10 p-4'>
                <div className='h-[367px]'>
                    <h2 className="text-[22px] font-[600] mb-4 opacity-80  text-[#343C6A] ">Weekly Activity</h2>
                    <WeeklyActivityChart />
                </div>
                <section className="w-[350px]  flex flex-col justify-between gap-3 h-[367px] ">
                    <h1 className="text-[#343C6A] text-xl font-semibold">Recent Transactions</h1>
                    <div className='h-[322px] w-full  rounded-2xl'>

                        <PieChart />


                    </div>
                </section>

            </div>
            {/*  */}

            <div className='w-full mt-3 flex items-center justify-center gap-8'>
                <div className='w-[445px] h-[323px] flex flex-col gap-4'>
                    <h1 className='text-color text-[22px] font-[600]'>Quick Transfer</h1>
                    <div className='h-[276px] flex flex-col p-4 bg-white shadow-2xl rounded-2xl gap-8'>
                        <div className='images w-[394px] flex gap-9 items-center h-[127px]'>
                            <div className='flex items-center flex-col justify-start'>
                                <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1668319915476-5cc7717e00f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div className='flex w-[85px] h-[42px] items-center justify-center flex-col'>
                                    <h2 className='flex'>Livia Bator</h2>
                                    <h3>CEO</h3>
                                </div>
                            </div>
                            <div className='flex items-center flex-col justify-start'>
                                <div className='w-[70px] h-[70px]  rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1668319915476-5cc7717e00f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div className='flex w-[85px] h-[42px] items-center justify-center flex-col'>
                                    <h2 className='flex'>Livia Bator</h2>
                                    <h3>CEO</h3>
                                </div>
                            </div>
                            <div className='flex items-center flex-col justify-start'>
                                <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1668319915476-5cc7717e00f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div className='flex w-[85px] h-[42px] items-center justify-center flex-col'>
                                    <h2 className='flex'>Livia Bator</h2>
                                    <h3>CEO</h3>
                                </div>
                            </div>

                            <div className='p-5 mr-6 text-color rounded-full bg-white shadow-2xl flex items-center justify-center'>
                                <ChevronRight />
                            </div>

                        </div>
                        <div className='w-[394px] h-[50px] p-2 flex items-center justify-between gap-3'>
                            <h2>Write Amount</h2>

                            <div className='w-[265px] flex items-center justify-between shadow-2xl overflow-hidden py-4 gap-6 text-black rounded-2xl h-full  bg-[#EDF1F7]'>
                                <h2 className='ml-2'>525.50</h2>
                                <div className="flex bg-[#1814F3] p-7 items-center justify-between rounded-l-full">
                                    <button className="text-white font-medium">Send</button>
                                    <Send className='text-white ml-4' />
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
                <div className=''>
                    <BalanceHistory />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
