import React from 'react'
import Features from '../HomeSection/Features';

import Hero from '../HomeSection/Hero';
import HomeAbout from '../HomeSection/HomeAbout';
import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      <HomeAbout/>
      <Features/>
    </div>
  )
}

export default Home