import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Dashboard/Navbar"
import Sidebar from "./Dashboard/Sidebar"

const MainDashboard = () => {

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="sticky top-0">

            <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-100 ">
                {/* Navbar */}
                <Navbar />

                {/* Dynamic Content */}
                <div className="overflow-y-auto mt-5 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
