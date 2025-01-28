import { Bell, Search, Settings } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='p-4 bg-[#FFFFFF] h-[100px] p-6'>
            <nav className='flex  items-center justify-between'>
                <div className='flex '>
                <h1 className='text-2xl text-[#343CCA] font-bold'>Overview</h1>
                </div>
                <div className='flex items-center justify-center  gap-4 P-3'>
                    <div className='bg-[#F5F7FA] w-[255px] h-[50px] flex items-center justify-center gap-2 p-3 rounded-3xl'>
                        <Search />
                        <input type="text" className='text-md' placeholder='Search for somethings' />


                    </div>
                    <div className='    bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                        <Settings className='bg-[BBCAE1] ' />
                    </div>
                    <div className='bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                        <Bell />
                    </div>
                    <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
                        <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-alipazani-2787341.jpg&fm=jpg" className='w-full h-full object-cover' alt="" />
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default Navbar
