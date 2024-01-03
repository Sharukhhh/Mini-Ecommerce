import React from 'react'

const FooterSection = () => {
  return (
    <>
        <footer className='bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mt-10 p-3'>
            <div className='container mx-auto flex flex-col items-center'>
                <h2 className='text-2xl font-bold text-black my-4'>Stay in Touch</h2>

                <div className='flex flex-col sm:flex-row items-center mb-4'>
                    <input 
                    type="text" name="" id="" placeholder='Enter'
                    className='bg-gray-50 text-white px-4 py-2 rounded-l-md focus:outline-none mr-2 mb-3'
                    />

                    <button className='bg-gray-700 text-white px-6 py-2 rounded-r-md focus:outline-none'>
                        Send
                    </button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default FooterSection