import React from 'react'
import DestionationsHome from '../HomeSection/Destins/DestionationsHome';
import Footer from '../HomeSection/Footer';


import Hero from '../HomeSection/Hero';
import MostBooked from '../HomeSection/MostBooked/MostBooked';

import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      <div className='content'>
        <div className='icons'>
        <i class="fa-solid fa-house"></i>
        </div>
      </div>
      
      <DestionationsHome/>
      <MostBooked/>
      <Footer/>
    </div>
  )
}

export default Home