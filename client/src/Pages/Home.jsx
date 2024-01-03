import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import {images} from '../assets/data.js';
import Banner from '../Components/banner/Banner.jsx';
import FilterCards from '../Components/cards/filterCards.jsx';
import ProductCard from '../Components/products/ProductCard.jsx';
import FooterSection from '../Components/footer/FooterSection.jsx';
import { ToastBar, Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <>
        <Toaster position='top-right'/>
        <NavBar/>
        <Banner images={images} />

        <FilterCards/>

        <ProductCard/>

        <FooterSection/>
    </>
  )
}

export default Home