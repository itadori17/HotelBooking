import React from 'react'

import Hero from '../HomeSection/Hero';
import HomeAbout from '../HomeSection/HomeAbout';
import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      <HomeAbout/>
    </div>
  )
}

export default Home