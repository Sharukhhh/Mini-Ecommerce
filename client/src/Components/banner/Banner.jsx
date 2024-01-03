import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Banner = ({images}) => {

    const [currentIndex , setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }
  return (
    <>
        <div className='relative overflow-hidden mt-16'>
            <div className='flex transition-transform duration-500 ease-in-out transform' 
            style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${
                    (100 / images.length) * currentIndex
                }%)`,
            }}
            >
                {images.map((image , index) => (
                    <div className='w-full flex-shrink-0 max-w-screen-lg mx-auto' key={index}>
                        <img src={image} alt="" className='w-full h-auto' />
                    </div>
                ))}    
            </div>

            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
            onClick={previousSlide}>
                <BsChevronLeft size={24}/>
            </button>

            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
            onClick={nextSlide}>
                <BsChevronRight size={24}/>
            </button>
        </div>
    </>
  )
}

export default Banner