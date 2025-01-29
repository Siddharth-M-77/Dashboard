import React, { useState } from 'react'
import { CreditCard, Home } from "lucide-react";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { id: 1, label: "Dashboard", icon: <Home /> },
        { id: 2, label: "Transaction", icon: <Home /> },
        { id: 3, label: "Accounts", icon: <Home /> },
        { id: 4, label: "Investments", icon: <Home /> },
        { id: 5, label: "Credit Card", icon: <Home /> },
        { id: 6, label: "Loans", icon: <Home /> },
        { id: 7, label: "Services", icon: <Home /> },
        { id: 8, label: "My Privileges", icon: <Home /> },
        { id: 9, label: "Settings", icon: <Home /> },
    ];

    return (
        <div className="w-[250px] sticky top-0 bg-[#FFFFFF] flex flex-col">
            <div className="flex h-[101px] items-center justify-center gap-2">
                <CreditCard />
                <h1 className="text-center text-xl mt-2 text-[#343CCA] font-bold">BankDash</h1>
            </div>
            <div className="flex flex-col items-start w-[211px]  p-4 ">
                {menuItems?.map((item) => (
                    <Link to={`${item.label}`}
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        className={`flex items-center w-full gap-6 mb-8 cursor-pointer`}
                    >
                        {/* Render Icon with dynamic color */}
                        <div
                            className={`${activeItem === item.id ? "text-blue-600" : "text-black"
                                }`}
                        >
                            {React.cloneElement(item.icon, {
                                className: "text-lg font-bold text-[25px]",
                            })}
                        </div>
                        {/* Render Label with dynamic color */}
                        <h2
                            className={`${activeItem === item.id ? "text-blue-600" : "text-black"
                                } font-semibold`}
                        >
                            {item.label}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
