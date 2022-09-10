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
        <i class="fa-solid fa-house"></i>&ensp;
        <i class="fa-solid fa-person"></i>&ensp;
        <i class="fa-solid fa-bed"></i>
        <br/>
        <h3>Bhisqhiets Lodge is a 4 star graded guest house offering Vanderbijlpark accommodation in 17 guest rooms</h3>
        <p></p>

        </div>
      </div>
      
      <DestionationsHome/>
      <MostBooked/>
      <Footer/>
    </div>
  )
}

export default Home