import React from 'react';
import {cardImages} from '../../assets/data.js';
import Single from './Single.jsx';

const FilterCards = () => {
  return (
    <>
        <div className='flex flex-wrap text-white justify-center mt-8'>

            <Single title={'Shoes'} item={cardImages[0]}/>

            <Single title={'Bags'} item={cardImages[2]}/>

            <Single title={'Watches'} item={cardImages[1]}/>
        </div>
    </>
  )
}

export default FilterCards