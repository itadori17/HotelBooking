import React from 'react'
import DestionationsHome from '../HomeSection/Destins/DestionationsHome';


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
      
    </div>
  )
}

export default Home