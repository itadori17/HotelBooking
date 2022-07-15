import React from 'react'
import DestionationsHome from '../HomeSection/Destins/DestionationsHome';


import Hero from '../HomeSection/Hero';

import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      <DestionationsHome/>
      
    </div>
  )
}

export default Home