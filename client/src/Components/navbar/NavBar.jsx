import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import SideBar from '../sidebar/SideBar';

const NavBar = () => {

    const [sidebar , setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(true);
    }

    const closeSideBar = () => {
        setSidebar(false);
    }

    const cartIconPosition = {
        marginRight : sidebar ? '150px' : '0',
        transition : 'margin 0.3s ease'
    }
  return (
    <>
        <nav className='bg-gradient-to-r from-[#3a7bd5] via-[#00d2ff] to-[#3a7bd5] p-6 fixed top-0 w-full z-50'>
            <div className='flex items-center justify-between'>
                <div className='text-white text-2xl'>
                    <span>Mini-E</span>
                </div>

                <div className='text-white cursor-pointer' onClick={toggleSidebar}>
                    <BsCart4 size={24} style={cartIconPosition} />
                </div>
            </div>

            {sidebar && (
                <div className='fixed inset-y-0 right-0 w-80 bg-gray-800 text-white p-4 z-10'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl font-bold'>Wishlisted Items</h2>
                        <p className='cursor-pointer text-xl font-semibold text-gray-200' onClick={closeSideBar}>
                            X
                        </p>
                    </div>

                    <hr className='my-2 border-gray-600'/>
                    
                    <SideBar/>
                </div>
            )}
        </nav>    
    </>
  )
}

export default NavBar