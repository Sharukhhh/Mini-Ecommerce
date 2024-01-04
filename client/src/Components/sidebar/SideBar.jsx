import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/cartSlice';
import { MdRemoveShoppingCart } from "react-icons/md";

const SideBar = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items);

    const remove = (productId) => {
        dispatch(removeFromCart(productId));

    }

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

                        <button title='Remove Item' className='px-2 py-1 mt-5 shadow-lg rounded-sm shadow-black  bg-red-600' onClick={() => remove(product?._id)} >
                            <MdRemoveShoppingCart size={20}/>
                        </button>
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