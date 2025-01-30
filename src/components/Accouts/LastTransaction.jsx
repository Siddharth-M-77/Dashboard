import React from 'react'
import Card from '../Dashboard/Card'
import { BellRing, Home, Settings, UserRound } from 'lucide-react'

const LastTransaction = () => {
    const rows = [{
        icon: <BellRing />,
        name: "Spotify Subscription",
        date: "25 Jan 2021",
        type: "Shopping",
        pin: "1234 ****",
        status: "Pending",
        money: "-$150",
        color: "#DCFAF8",
        textcolor: "#16DBDC"
    },
    {
        icon: <Settings />,
        name: "Mobile Services",
        date: "25 Jan 2021",
        type: "Service",
        pin: "1234 ****",
        status: "Complete",
        money: "-$340",
        color: "#EDEDFF",
        textcolor: "#396AFF"
    },
    {
        icon: <UserRound />,
        name: "Spotify Subscription",
        date: "25 Jan 2021",
        type: "Transfer",
        pin: "1234 ****",
        status: "Complete",
        money: "+$780",
        color: "#FEE0EB",
        textcolor: "#FF8DB4"
    },
    ]

    return (
        <div className='w-full flex mt-5 items-center justify-center gap-6 '>
            <div className='w-[730px] h-[282px] flex flex-col justify-center'>
                <h1 className='text-color font-[600] text-[22px] mb-4'>Last Transtion</h1>
                <div className={` h-[250px]  bg-white shadow-md flex items-center py-6  flex-col  rounded-[25px]`}>
                    {
                        rows.map((row) => {
                            return (
                                <div className='w-[680px] h-[55px] flex items-center justify-between'>
                                    <div className='flex items-center justify-center gap-4'>
                                        <div style={{ backgroundColor: row.color, color: row.textcolor }}
                                            className="w-[55px] h-[55px] rounded-full flex items-center justify-center shadow-2xl">
                                            {row.icon}

                                        </div>
                                        <div className='flex flex-col justify-start '>
                                            <h2 className='text-[16px]'>{row.name}</h2>
                                            <h4 className='text-[15px] font-[400]'>{row.date}</h4>
                                        </div>
                                    </div>

                                    <div className='flex  items-start gap-4  px-4'>
                                        <h4 className='opacity-80 text-[16px] font-[400]'>{row.type}</h4>
                                        <h4 className='opacity-80 text-[16px]'>{row.pin}</h4>
                                        <h4 className='opacity-80'>{row.status}</h4>
                                    </div>
                                    <h4>{row.money}</h4>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
            <div className="flex flex-col items-start justify-between ">
                <div className='w-full flex items-center mb-4 justify-between px-2'>
                    <h1 className='text-color font-[600] text-[22px] '>My Card</h1>
                    <h4 className='text-color text-[17px] font-[600]'>See All</h4>
                </div>
                <Card color="#3A74FF" text="white" />
            </div>
        </div >
    )
}

export default LastTransaction
