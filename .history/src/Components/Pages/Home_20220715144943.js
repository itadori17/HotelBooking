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
      <DestionationsHome/>
      <MostBooked/>
      <Footer/>
    </div>
  )
}

export default Home