import { Bell, Search, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    return (
        <div className='p-4 bg-white h-auto shadow-md'>
            <nav className='flex flex-wrap items-center justify-between'>
                {/* Logo and Menu Toggle */}
                <div className='flex items-center justify-between w-full sm:w-auto'>
                    <Link to='/' className='text-2xl text-blue-600 font-bold'>
                        Overview
                    </Link>
                    <button 
                        className='sm:hidden p-2 text-gray-600' 
                        onClick={handleMenuToggle}
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <div className={`sm:flex sm:items-center sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0 ${menu ? 'block' : 'hidden'}`}>
                    {/* Search Bar */}
                    <div className='bg-gray-100 w-full sm:w-[255px] h-12 flex items-center px-4 rounded-full mb-4 sm:mb-0'>
                        <Search className='text-gray-400' />
                        <input
                            type='text'
                            className='flex-1 bg-transparent text-sm placeholder-gray-400 outline-none px-2'
                            placeholder='Search for something'
                        />
                    </div>

                    {/* Icons */}
                    <div className='flex items-center gap-4'>
                        <div className='bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center'>
                            <Settings className='text-gray-400' />
                        </div>
                        <div className='bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center'>
                            <Bell className='text-red-500' />
                        </div>
                        <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img
                                src='https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-alipazani-2787341.jpg&fm=jpg'
                                className='w-full h-full object-cover'
                                alt='Profile'
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
