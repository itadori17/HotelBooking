import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='grid'>
        <h3>Visit Our Social Media tags</h3>
        <div className='icon'>
        <h3>Follow Us On :</h3>
        <ul className='footer'>
            <li><i className='fab fa-facebook'></i></li>
            <li><i className='fab fa-twitter'></i></li>
            <li><i className='fab fa-linkedin'></i></li>
            <li><i className='fab fa-instagram'></i></li>
            <li><i className='fab fa-pinterest'></i></li>
            <li><i className='fab fa-youtube'></i></li>
        </ul>

        </div>
        </div>
      </section>
    </>
  )
}

export default Footer
