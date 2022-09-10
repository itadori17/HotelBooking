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
        <br/><br/>
        <h4>Bhisqhiets Lodge is a 4 star graded guest house offering Vanderbijlpark accommodation in 17 guest rooms</h4><br/>
        <h2>Bhisqhiets Lodge</h2><br/>
        <p>Bhisqhiets Lodge is a luxury 4-star lodge which offers accommodation for both business and leisure travellers.
We offer child friendly accommodation and can also accommodate guests in wheelchairs.
You can be assured of the best service, comfort and hospitality at the Aark Guest Lodge</p>

        </div>
      </div>
      
      <DestionationsHome/>
      <MostBooked/>
      <Footer/>
    </div>
  )
}

export default Home