import React from "react";
import { Briefcase, Wallet, CreditCard, Shield } from "lucide-react";

const BankServicesList = () => {
    const services = [
        { id: 1, name: "Business loans", description: "It is a long established", details: "Many publishing", icon: <Briefcase className="text-pink-500" />, bgColor: "bg-pink-100" },
        { id: 2, name: "Checking accounts", description: "It is a long established", details: "Many publishing", icon: <Wallet className="text-yellow-500" />, bgColor: "bg-yellow-100" },
        { id: 3, name: "Savings accounts", description: "It is a long established", details: "Many publishing", icon: <CreditCard className="text-pink-500" />, bgColor: "bg-pink-100" },
        { id: 4, name: "Debit and credit cards", description: "It is a long established", details: "Many publishing", icon: <CreditCard className="text-blue-500" />, bgColor: "bg-blue-100" },
        { id: 5, name: "Life Insurance", description: "It is a long established", details: "Many publishing", icon: <Shield className="text-green-500" />, bgColor: "bg-green-100" },
    ];

    return (
        <div className="flex flex-col items-start p-6">
            <h2 className="text-[22px] font-[600] text-color2 text-gray-800 mb-4">Bank Services List</h2>
            <div className="space-y-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex items-center justify-between w-[1110px] h-[90px] bg-white shadow-md rounded-lg px-6"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-[60px] h-[60px] flex items-center justify-center rounded-[20px] ${service.bgColor}`}
                            >
                                {service.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-900 font-semibold">{service.name}</h3>
                                <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-start">
                            <span className="text-gray-900">{service.details}</span>
                            <span className="text-sm text-gray-500">Many publishing</span>
                        </div>
                        <div className="flex flex-col text-start">
                            <span className="text-gray-900">{service.details}</span>
                            <span className="text-sm text-gray-500">Many publishing</span>
                        </div>
                        <div className="flex flex-col text-start">
                            <span className="text-gray-900">{service.details}</span>
                            <span className="text-sm text-gray-500">Many publishing</span>
                        </div>
                        <button className="text-blue-500 font-medium border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BankServicesList;
