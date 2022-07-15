import React from 'react'
import Features from '../HomeSection/Features';

import Hero from '../HomeSection/Hero';

import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      
      <Features/>
    </div>
  )
}

export default Home