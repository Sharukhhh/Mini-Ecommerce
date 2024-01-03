import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

    const products = useSelector((state) => state.cart.items);

  return (
    <>  
        {products?.length > 0 ? (
            products?.map((product , index) => (
            <>
                <div key={index} className='flex items-center mb-2'>
                    <div className='flex-shrink-0 w-16 h-16'>
                        <img src={product?.image} alt="" className='w-16 h-16 object-contain' />
                    </div>

                    <div className='ml-4'>
                        <p className='text-sm font-semibold'>{product?.name}</p>
                        <p className='text-xs text-gray-300'>₹ {product?.price}</p>
                    </div>
                </div>

                <hr className='my-4'/>
            </>
            ))
        ) : (
            <p className='text-center mt-4'>Empty cart!</p>
        )}
    </>
  )
}

export default SideBar