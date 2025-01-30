import { CreditCard, Lock, Key, Apple } from 'lucide-react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";

const AddNewCardAndSetting = () => {
    const cardSettings = [
        {
            name: 'Block Card',
            description: 'Instantly block your card',
            icon: <Lock />,
            bgColor: '#FFF5D9'
        },
        {
            name: 'Change Pin Code',
            description: 'Choose another pin code',
            icon: <Key />,
            bgColor: '#E8F5FF'
        },
        {
            name: 'Add to Google Pay',
            description: 'Withdraw without any card',
            icon: <FaGoogle />,
            bgColor: '#FFEDED'
        },
        {
            name: 'Add to Apple Pay',
            description: 'Withdraw without any card',
            icon: <Apple />,
            bgColor: '#E8F5FF'
        },
        {
            name: 'Add to Apple Store',
            description: 'Withdraw without any card',
            icon: <Apple />,
            bgColor: '#E8F5FF'
        },
    ];

    return (
        <div className="h-[600px] flex justify-center gap-16 items-center ">
            <div className="w-[730px] h-[450px]">
                <h1 className="text-color text-[22px] font-[600] mb-5">Add New Card</h1>
                <div className="h-[440px] w-full p-2 bg-white shadow-md rounded-[25px]">
                    <div className="p-5">
                        <p className="text-[16px] leading-[28px] font-[400] text-[#718EBF]">
                            Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned
                            to a Cardholder, with a credit limit, that can be used to purchase goods and services
                            on credit or obtain cash advances.
                        </p>
                    </div>
                    <div className="w-[670px] p-5 h-[262px] py-5">
                        {/* Form fields */}
                        <div className="flex items-center mb-6 gap-6 justify-between">
                            <div className="flex flex-col gap-3 items-start">
                                <h2 className="text-[16px] font-[400]">Card Type</h2>
                                <input
                                    type="text"
                                    className="p-5 w-[320px] h-[50px] border border-[#DFEAF2] rounded-[15px]"
                                />
                            </div>
                            <div className="flex flex-col gap-3 items-start">
                                <h2 className="text-[16px] font-[400]">Card Type</h2>
                                <input
                                    type="text"
                                    className="p-5 w-[320px] h-[50px] border border-[#DFEAF2] rounded-[15px]"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-6 gap-6 justify-between">
                            <div className="flex flex-col gap-3 items-start">
                                <h2 className="text-[16px] font-[400]">Card Type</h2>
                                <input
                                    type="text"
                                    className="p-5 w-[320px] h-[50px] border border-[#DFEAF2] rounded-[15px]"
                                />
                            </div>
                            <div className="flex flex-col gap-3 items-start">
                                <h2 className="text-[16px] font-[400]">Card Type</h2>
                                <input
                                    type="text"
                                    className="p-5 w-[320px] h-[50px] border border-[#DFEAF2] rounded-[15px]"
                                />
                            </div>
                        </div>

                        <button className="w-[160px] h-[50px] bg-[#1814F3] text-white font-medium rounded-[15px] text-center">
                            Save
                        </button>

                    </div>
                </div>
            </div>
            <div className="w-[350px] h-[487px] mt-8">
                <h1 className="text-color text-[22px] font-[600] mb-5">Card Setting</h1>
                <div className="h-[440px]  shadow-md flex items-center flex-col bg-white rounded-[25px] p-5">
                    {cardSettings.map((setting, index) => (
                        <div key={index} className="w-[271px] h-[60px] flex gap-2 mb-4">
                            <div
                                className="w-[60px] h-[60px] rounded-[20px] flex items-center justify-center"
                                style={{ backgroundColor: setting.bgColor }}
                            >
                                {setting.icon}
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="text-[16px] font-[500]">{setting.name}</h2>
                                <h4>{setting.description}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddNewCardAndSetting;
