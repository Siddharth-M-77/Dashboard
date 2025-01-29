import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Dashboard/Navbar"
import Sidebar from "./Dashboard/Sidebar"

const MainDashboard = () => {

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-100">
                {/* Navbar */}
                <Navbar />

                {/* Dynamic Content */}
                <div className="p-5 overflow-y-auto w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
