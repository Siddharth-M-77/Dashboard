import { BadgeDollarSign } from 'lucide-react';
import React from 'react';

const Header = ({ key, name, category, icon, bgColor }) => {



    return (
        <div className='w-[350px] h-[120px]'>
            <div className='bg-white shadow-md rounded-[25px]'>
                <div className='w-full h-[120px] flex items-center justify-center bg-white p-4 rounded-xl'>
                    {/* Icon with better visibility */}
                    <div className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-[]'>
                        <BadgeDollarSign className='text-blue-600 w-8 h-8' />
                    </div>

                    {/* Text section */}
                    <div className='flex flex-col w-[170px] items-start text-white text-color'>
                        <h2 className='text-sm opacity-80 font-semibold'>Total Investment Amount</h2>
                        <h3 className='text-lg font-bold'>$150,000</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
