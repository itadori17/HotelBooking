import React from 'react';
import "../styles/about.css";

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
            <h4>About Us</h4>
            <h1>
            Bhisqhiets Lodge <span>is a luxury 4-star lodge which offers accommodation for both business and leisure travellers.</span>
           
            </h1>
            <p> We offer child friendly accommodation and can also accommodate guests in wheelchairs.
            </p>
            <p>You can be assured of the best service, comfort and hospitality at the Aark Guest Lodge.

            </p>
            <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
        </div>
      </div>
    </>
  )
}

export default AboutCard
