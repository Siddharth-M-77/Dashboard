import { Activity, Apple } from 'lucide-react';
import React from 'react';
import ApexChart from './ApexChart';

const DebitCreditGraph = () => {
    const data = [
        {
            icon: <Apple />,
            store: "Apple",
            time: "5h ago",
            money: "540",
            color: "#DCFAF8",
            textcolor: "#16DBDC"
        },
        {
            icon: <Apple />,
            store: "Michle",
            time: "2d ago",
            money: "160",
            color: "#FFF5D9",
            textcolor: "#fec76f"
        },
        {
            icon: <Activity />,
            store: "Michle",
            time: "2d ago",
            money: "160",
            color: "#E7EDFF",
            textcolor: "#71a3c1"
        },
        {
            icon: <Activity />,
            store: "William",
            time: "10 day ago",
            money: "160",
            color: "#E7EDFF",
            textcolor: "#71a3c1"
        }

    ];

    return (
        <div className='w-full flex items-center justify-center gap-10 mt-10'>
            <div className='w-[730px] h-[411px] '>
                <h1 className='mb-4 text-xl text-color'>Debit & Credit Over</h1>
                <div className='w-full h-[364px] bg-white flex items-center justify-center p-2 shadow-md rounded-[25px]'>
                    <div className='w-[670px] h-[309px]'>
                        <div className='w-full flex flex-col items-start justify-between'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='w-[355px] h-[19px]'>
                                    <h1 className='text-md text-col'>$7,560 Debited & $5,420 Credited in this Week</h1>
                                </div>
                                <div className='w-[163px] h-[19px] flex items-center justify-between'>
                                    <div className='w-[66px] h-full flex items-center justify-between'>
                                        <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                        <h2 className='text-[1rem]'>Debit</h2>
                                    </div>
                                    <div className='w-[66px] h-full flex items-center justify-between'>
                                        <div className='w-4 h-4 bg-pink-400 rounded-full'></div>
                                        <h2 className='text-[1rem]'>Credit</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[263px] mt-4 '>
                                <ApexChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='h-[411px] w-[350px]  '>
                <h1 className='mb-4  text-xl text-color'>Invoices Sent</h1>
                <div className=' shadow-2xl rounded-[25px] h-[364px] flex flex-col py-5 px-4'>
                    {data.map((item, index) => (
                        <div key={index} className='w-[300px]  h-[60px] rounded-[25px] flex items-center justify-between p-2 mb-6'>
                            {/* Icon and Details */}
                            <div className='flex items-center gap-3'>
                                <div
                                    className='w-[60px] h-[60px] flex items-center justify-center rounded-full p-2'
                                    style={{ backgroundColor: item.color, color: item.textcolor }}
                                >
                                    {item.icon}
                                </div>
                                <div className='flex flex-col w-[90px] h-full'>
                                    <h4 className='opacity-80'>{item.store}</h4>
                                    <h4 className='opacity-80'>{item.time}</h4>
                                </div>
                            </div>
                            <h4 className='opacity-80'>${item.money}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DebitCreditGraph;
