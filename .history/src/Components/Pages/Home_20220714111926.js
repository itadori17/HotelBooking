import React from 'react'
import Destionations from '../Destionations/Home';
import DestionationsHome from '../HomeSection/Destins/DestionationsHome';


import Hero from '../HomeSection/Hero';

import Navbar from '../HomeSection/Navbar';


const Home = () => {
  return (
    <div>
       <Navbar />
       
      <Hero/>
      <Destionations/>
      
    </div>
  )
}

export default Home