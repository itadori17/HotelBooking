import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    const [ click, setClick ] = useState(false);
    const closeMobileMenu = () => setClick(!click)
  return (
    <>
    
      <section className='footer'>
      <h3>Visit Our Social Media tags</h3>
      
        <div className='grid'>
        <li><Link to='/' onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to='/' onClick={closeMobileMenu}>Contact Us</Link></li>
        <li><Link to='/' onClick={closeMobileMenu}>Desclaimer</Link></li>
        <li><Link to='/' onClick={closeMobileMenu}>Privacy Policy</Link></li>
        <li><Link to='/' onClick={closeMobileMenu}>Copyright</Link></li>
        <li><Link to='/' onClick={closeMobileMenu}>Terms of Use</Link></li>
        <div className='icon'>
            <hr/>
        <h3>Follow Us On :</h3>
        <ul className='flex_space'>
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
