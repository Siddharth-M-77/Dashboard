import React from 'react';
import Header from '../components/Investment.jsx/Header';
import InvestmentGraph from '../components/Investment.jsx/InvestmentGraph';
import { Apple, Banknote, Bitcoin, Briefcase } from 'lucide-react';


const Investment = () => {
    const stocks = [
        { id: 1, name: "Trivago", price: "$520", returnValue: "+5%", returnColor: "text-green-500" },
        { id: 2, name: "Canon", price: "$480", returnValue: "+10%", returnColor: "text-green-500" },
        { id: 3, name: "Uber Food", price: "$350", returnValue: "-3%", returnColor: "text-red-500" },
        { id: 4, name: "Nokia", price: "$940", returnValue: "+2%", returnColor: "text-green-500" },
        { id: 5, name: "Tiktok", price: "$670", returnValue: "-12%", returnColor: "text-red-500" },
    ];

    const investments = [
        { id: 1, name: "Apple", category: "E-commerce, Marketplace", icon: <Apple />, bgColor: "bg-[#FFE0EB]", investment: "$5400", returnValue: "+16%", returnColor: "text-green-400" },
        { id: 2, name: "Bitcoin", category: "Cryptocurrency", icon: <Bitcoin />, bgColor: "bg-[#FFF3E0]", investment: "$12,000", returnValue: "+24%", returnColor: "text-green-400" },
        { id: 3, name: "Bank", category: "Fixed Deposits", icon: <Banknote />, bgColor: "bg-[#E0F7FA]", investment: "$8000", returnValue: "+8%", returnColor: "text-green-400" },

    ];

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-[1110px] h-[120px] mt-8 flex items-center justify-between'>
                {
                    investments.map((item, i) => (
                        <Header key={i} name={item.name} category={item.category} icon={item.icon} bgColor={item.bgColor} />
                    ))
                }
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-10'>
                <InvestmentGraph />
                <InvestmentGraph />
            </div>

            <div className='flex flex-col md:flex-row items-start justify-between gap-10 mt-5 '>
                <div className='w-[635px]'>
                    <h1 className='text-color text-[22px] font-[600] mb-5'>My Investment</h1>
                    <div className='w-full h-auto px-5 flex flex-col items-center'>
                        {investments.map((item) => (
                            <div key={item.id} className='flex items-center w-[635px] gap-3 bg-white shadow-md h-[90px] justify-between rounded-xl px-4 py-3 mb-4'>
                                <div className='flex items-center gap-3'>
                                    <div className={`w-[60px] h-[60px] flex items-center justify-center rounded-full ${item.bgColor}`}>{item.icon}</div>
                                    <div className='flex flex-col items-start'>
                                        <h2 className='text-color text-[1rem]'>{item.name}</h2>
                                        <h2 className='opacity-80'>{item.category}</h2>
                                    </div>
                                </div>
                                <div>
                                    <h2>{item.investment}</h2>
                                    <h2 className='opacity-70'>Investment Value</h2>
                                </div>
                                <div>
                                    <h2 className={item.returnColor}>{item.returnValue}</h2>
                                    <h2 className='opacity-70'>Return Value</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[445px] h-[310px] flex items-start flex-col p-4">
                    <h2 className="text-[22px] font-[600] text-gray-700 mb-3">Trending Stocks</h2>
                    <div className='bg-white shadow-md rounded-[25px] p-4'>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-300 border-opacity-50">
                                    <th className="text-left text-gray-500 p-2">SL No</th>
                                    <th className="text-left text-gray-500 p-2">Name</th>
                                    <th className="text-left text-gray-500 p-2">Price</th>
                                    <th className="text-left text-gray-500 p-2">Return</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stocks.map((stock, index) => (
                                    <tr key={stock.id} className="border-b border-gray-300 border-opacity-50"> {/* Yahan bhi same opacity apply ki hai */}
                                        <td className="p-2 text-gray-700">{`0${index + 1}.`}</td>
                                        <td className="p-2 text-gray-700">{stock.name}</td>
                                        <td className="p-2 text-gray-700">{stock.price}</td>
                                        <td className={`p-2 font-semibold ${stock.returnColor}`}>{stock.returnValue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Investment;



