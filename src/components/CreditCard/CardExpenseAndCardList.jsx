import { CreditCardIcon } from 'lucide-react';
import React from 'react'

const CardExpenseAndCardList = () => {
    const cardData = [
        {
            cardType: 'Primary',
            bank: 'XYZ Bank',
            creditNumber: '**** **** 1234',
            name: 'John Doe',
            icon: <CreditCardIcon />
        },
        {
            cardType: 'Gold',
            bank: 'ABC Bank',
            creditNumber: '**** **** 9876',
            name: 'Jane Smith',
            icon: <CreditCardIcon />
        },
        {
            cardType: 'Platinum',
            bank: 'LMN Bank',
            creditNumber: '**** **** 4321',
            name: 'Sarah Lee',
            icon: <CreditCardIcon />
        }
    ];

    return (
        <div className='w-full flex items-center justify-center gap-22'>
            <div className='w-[350px] h-[357px]'>
                <h1 className='text-color mb-3 text-[22px]'>Credit Card</h1>
                <div className='w-full h-[310px] bg-white shadow-md rounded-[25px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='p-6'>
                            <svg width="189" height="187" viewBox="0 0 189 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.83" d="M147.221 56.6355C133.57 42.7203 114.615 34.0246 93.5887 33.8239C72.5627 33.6231 53.4385 41.9701 39.5339 55.6106C25.6293 69.2511 16.923 88.2167 16.7223 109.243C16.5215 130.269 24.8685 149.393 38.509 163.297C52.1495 177.202 71.1152 185.908 92.1412 186.109C113.167 186.31 132.291 177.963 146.196 164.322C160.111 150.671 168.807 131.716 169.008 110.69C169.208 89.6642 160.861 70.5507 147.221 56.6355Z" fill="url(#paint0_radial_3307_26859)" fill-opacity="0.5" />
                                <path d="M7.91781 99.6797C7.7065 121.678 16.4339 141.689 30.7189 156.249C45.0039 170.809 64.8359 179.917 86.834 180.128L87.5947 100.451L7.91781 99.6797Z" fill="#FFBB38" />
                                <path d="M39.2522 99.9766C39.1254 113.332 44.4189 125.472 53.0935 134.305C61.7574 143.138 73.7919 148.664 87.1471 148.791L87.612 100.441L39.2522 99.9766Z" fill="#FFB11F" />
                                <path d="M26.2455 37.9128C10.2383 53.6136 0.232448 75.4214 0 99.6066L87.6013 100.441L88.436 12.8401C64.2402 12.6076 42.2527 22.212 26.2455 37.9128Z" fill="#4C78FF" />
                                <path d="M53.7357 65.9188C44.9027 74.5828 39.3768 86.6173 39.25 99.9725L87.5992 100.437L88.0641 52.0882C74.7089 51.9614 62.5688 57.2549 53.7357 65.9188Z" fill="#3464F3" />
                                <path d="M159.304 30.0915C141.3 11.7386 116.301 0.264146 88.5552 0L87.5938 100.439L188.032 101.4C188.307 73.6544 177.308 48.4337 159.304 30.0915Z" fill="#16DBCC" />
                                <path d="M122.112 66.5717C113.448 57.7387 101.414 52.2127 88.0586 52.0859L87.5938 100.435L135.943 100.9C136.08 87.5448 130.787 75.4047 122.112 66.5717Z" fill="#1EC6B8" />
                                <path d="M87.6008 100.438L86.9141 172.074C106.693 172.264 124.676 164.414 137.767 151.576C150.858 138.739 159.047 120.904 159.227 101.124L87.6008 100.438Z" fill="#FF82AC" />
                                <path opacity="0.08" d="M87.5274 108.227L87.6014 100.44L7.92452 99.6797C7.90339 102.311 8.00905 104.91 8.23093 107.467L87.5274 108.227Z" fill="url(#paint1_linear_3307_26859)" />
                                <path d="M87.5977 100.438L87.1328 148.787C100.488 148.914 112.628 143.62 121.461 134.956C130.294 126.292 135.82 114.258 135.947 100.902L87.5977 100.438Z" fill="#FF6195" />
                                <path opacity="0.83" d="M119.658 83.6379C113.445 77.309 104.823 73.3468 95.2508 73.2517C85.6782 73.1566 76.9825 76.9604 70.6536 83.1625C64.3246 89.3752 60.3625 97.9969 60.2674 107.57C60.1723 117.142 63.976 125.838 70.1781 132.167C76.3908 138.496 85.0125 142.458 94.5852 142.553C104.158 142.648 112.853 138.844 119.182 132.642C125.511 126.43 129.474 117.808 129.569 108.235C129.664 98.6625 125.871 89.9669 119.658 83.6379Z" fill="url(#paint2_radial_3307_26859)" fill-opacity="0.5" />
                                <path d="M112.338 76.1692C106.125 69.8403 97.5031 65.8781 87.9305 65.783C78.3579 65.6879 69.6622 69.4916 63.3333 75.6937C57.0043 81.9064 53.0421 90.5282 52.9471 100.101C52.852 109.673 56.6557 118.369 62.8578 124.698C69.0705 131.027 77.6922 134.989 87.2649 135.084C96.8375 135.179 105.533 131.376 111.862 125.173C118.191 118.961 122.153 110.339 122.248 100.766C122.343 91.1938 118.55 82.4981 112.338 76.1692Z" fill="white" />
                                <defs>
                                    <radialGradient id="paint0_radial_3307_26859" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92.8608 109.967) rotate(0.544294) scale(76.1507)">
                                        <stop />
                                        <stop offset="1" stop-opacity="0" />
                                    </radialGradient>
                                    <linearGradient id="paint1_linear_3307_26859" x1="47.6705" y1="109.403" x2="47.7575" y2="100.24" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" />
                                    </linearGradient>
                                    <radialGradient id="paint2_radial_3307_26859" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(94.9257 107.902) rotate(0.544294) scale(34.6508 34.6508)">
                                        <stop />
                                        <stop offset="1" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-full flex flex-col gap-4 items-center'>
                            <div className='flex items-center justify-between  w-full px-10'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-blue-600'></div>
                                    <h2>DBL Bank</h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-pink-600'></div>
                                    <h2>DBL Bank</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between  w-full px-10'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-[#16DBDC]'></div>
                                    <h2>DBL Bank</h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-yellow-600'></div>
                                    <h2>DBL Bank</h2>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <div className='w-[730px] h-[357px]'>
                <h1 className='text-[22px] text-color mb-3 font-[600]'>Card List</h1>
                <div className='w-full h-[310px] flex flex-col'>
                    {
                        cardData.map((card, index) => (
                            <div key={index} className='w-full mb-6 h-[90px] bg-white shadow-md rounded-[25px] flex items-center justify-between p-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='w-[60px] h-[60px] rounded-[20px] flex items-center justify-center'>
                                        {/* icon */}
                                        {
                                            card.icon
                                        }

                                    </div>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h2 className='text-[16px] font-[500]'>{card.cardType}</h2>
                                        <h2 className='opacity-80 text-[15px] font-[400]'></h2>

                                    </div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h2 className='text-[16px] font-[500]'>{card.bank} </h2>
                                    <h2 className='opacity-80 text-[15px] font-[400] '>DBL Bank</h2>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h2 className='text-[16px] font-[500]'>Credit Number </h2>
                                    <h2 className='opacity-80 text-[15px] font-[400] '>{card.creditNumber}</h2>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h2 className='text-[16px] font-[500]'>Namian Card </h2>
                                    <h2 className='opacity-80 text-[15px] font-[400] '>William</h2>
                                </div>
                                <a href="#" className='text-blue-800 '>Views Details</a>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default CardExpenseAndCardList
