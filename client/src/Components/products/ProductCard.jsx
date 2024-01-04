import React from 'react'
import {toast} from 'react-hot-toast';
import { products } from '../../assets/data.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/cartSlice.jsx';

const ProductCard = () => {

    const cartProducts = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();

    // To add an item to cart
    const addItemToCart = (product) => {
        const existingProduct = cartProducts.find((item) => item._id === product._id);

        if(!existingProduct){
            dispatch(addToCart(product));
            toast.success(`${product?.name} Added To Cart`);
        } else {
            toast.error('Already added to cart');
        }
    }

    // To Remove a product from cart
    const removeItemFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        toast.success('Removed Successfully!')
    }

    // To check if product exist in cart and conditonally render the buttons
    const isProductInCart = (productId) => {
        return cartProducts.some((item) => item?._id === productId);
    }

    const groupProductsByCategory = () => {
        const groupedProducts = {};

        products.forEach((product) => {
            const {category} = product;

            if(!groupedProducts[category]){
                groupedProducts[category] = [];
            }
            groupedProducts[category].push(product)
        })
        return groupedProducts;
    }

    const renderGroupedProducts = () => {
        const groupedProducts = groupProductsByCategory();

        return Object.keys(groupedProducts).map((category) => (
            <div key={category} className='mb-8'>
                <h2 className='text-2xl font-bold mb-4 md:ml-12'>{category}</h2>

                <div className='flex flex-wrap justify-center'>
                {groupedProducts[category].map((product , index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4 hover:scale-95'>
                        <div className='bg-white rounded-lg overflow-hidden shadow-lg mr-2'>
                            <img src={product?.image} alt="" className='w-80 h-72 object-contain'/>

                            <div className='px-6 py-4 text-center'>
                                <div className='font-bold text-xl mb-2'>{product?.name}</div>
                                <p className='text-gray-700 text-base mb-2 truncate'>{product?.about}</p>
                                <p className='text-gray-800 text-lg mb-2'>₹ {product?.price}</p>

                                {isProductInCart(product?._id) ? (
                                    <button onClick={() => removeItemFromCart(product?._id)} className='bg-red-700 text-white shadow-md px-4 py-1 rounded'> 
                                        Remove 
                                    </button>
                                ) : (
                                    <button onClick={() => addItemToCart(product)} className='bg-gray-800 text-white px-4 py-1 shadow-md rounded'>
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        ))
    }


  return (
    <>
        {renderGroupedProducts()}
    </>
  )
}

export default ProductCard