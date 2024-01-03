import React from 'react';

const Single = ({title , item}) => {
  return (
    <>
        <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4 cursor-pointer hover:scale-95'>
        <div className={`
            ${title === 'Bags' ? 'bg-gradient-to-l from-[#f953c6] to-[#b91d73]' :
            title === 'Shoes' ? 'bg-gradient-to-r from-[#f12711] to-[#f5af19]' :
            'bg-gradient-to-r from-[#1FA2FF] to-[#12D8FA]'}
            rounded-lg flex justify-evenly overflow-hidden shadow-lg
        `}>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{title}</div>
                </div>
                <img src={item} alt="" className='w-20 h-20 object-cover'/>
            </div>
        </div>
    </>
  )
}

export default Single