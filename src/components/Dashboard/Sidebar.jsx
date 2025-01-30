import React, { useState } from 'react';
import { CreditCard, Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate(); // useNavigate hook

    const menuItems = [
        { id: 1, label: "Dashboard", icon: <Home /> },
        { id: 2, label: "Transaction", icon: <Home /> },
        { id: 3, label: "Accounts", icon: <Home /> },
        { id: 4, label: "Investments", icon: <Home /> },
        { id: 5, label: "Credit Card", icon: <CreditCard /> },
        { id: 6, label: "Loans", icon: <Home /> },
        { id: 7, label: "Services", icon: <Home /> },
        { id: 8, label: "My Privileges", icon: <Home /> },
        { id: 9, label: "Settings", icon: <Home /> },
    ];

    // Handle click to update URL without UI changes
    const handleClick = (label) => {
        setActiveItem(label); // Set active state
        navigate(`/${label.toLowerCase().replace(/ /g, '-')}`); // Update URL dynamically
    };

    return (
        <div className="w-[250px] sticky top-0 bg-[#FFFFFF] flex flex-col">
            <div className="flex h-[101px] items-center justify-center gap-2">
                <CreditCard />
                <h1 className="text-center text-xl mt-2 text-[#343CCA] font-bold">BankDash</h1>
            </div>
            <div className="flex flex-col items-start w-[211px] p-4 ">
                {menuItems?.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleClick(item.label)} // On click, change the URL
                        className={`flex items-center w-full gap-6 mb-8 cursor-pointer`}
                    >
                        {/* Render Icon with dynamic color */}
                        <div className={`${activeItem === item.label ? "text-blue-600" : "text-black"}`}>
                            {React.cloneElement(item.icon, {
                                className: "text-lg font-bold text-[25px]",
                            })}
                        </div>
                        {/* Render Label with dynamic color */}
                        <h2
                            className={`${activeItem === item.label ? "text-blue-600" : "text-black"} font-semibold`}
                        >
                            {item.label}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
