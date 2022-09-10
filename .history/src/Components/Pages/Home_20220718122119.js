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
You can be assured of the best service, comfort and hospitality at the Aark Guest Lodge</p><br/>

<p>
Bhisqhiets Lodge offers 17 en-suite rooms which have both a bath and shower in the bathrooms. Each room has an air conditioner, fridge, microwave, flat screen DStv, DVD player and ADSL internet access.
Rooms are furnished with either a double bed and a single bed or a double bed only. Coffee and tea facilities and a welcome sherry are provided. The bedding and towelling in our rooms are crisp clear and of the highest standards.
</p>
<h2>BREAKFAST & DINING</h2>

<p>
Rates include a substantial breakfast which is not to be missed. The Ark Guest lodge has a full-time chef on site and dinners are served either in the rooms or in our restaurant as requested. Lunch packs can be arranged on request.
<h2>
ON SITE FACILITIES
</h2>
The sparkling swimming pool forms the centre of the lodge and adds to the relaxing atmosphere experienced at Bhisqhiets.
The Bonsai nursery located at the Bhisqhiets Lodge has high quality miniature trees for sale and training on cultivating and maintenance of bonsai trees is on offer.
Mountain bikes are available for hire should you wish to explore the 10km mountain bike track.
Camera surveillance is recorded 24 hours. Safe and secure parking is available and access is controlled with electronic gates.</p>

        </div>
      </div>
      
      <DestionationsHome/>
      <MostBooked/>
      <Footer/>
    </div>
  )
}

export default Home