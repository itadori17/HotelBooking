import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../images/logo.jfif"

const Navbar = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(!click)

  return (
    <div>
    <nav className='navbar'>
        <div className='cotainer flex_space'>

            <div className='logo'>
                <img src={Logo} alt="" width="150" height="90px" />
            </div>
            
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to='/about' onClick={closeMobileMenu}>AboutUs</Link></li>
                <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                
                <li><Link to='/rooms' onClick={closeMobileMenu}>Rooms</Link></li>
                <li><Link to='/reviews' onClick={closeMobileMenu}>Reviews</Link></li>
                <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                </ul>
                <div className='meni_icon'  onClick={handleClick}>
                <i className={click ? 'fa-solid fa-times' : 'fas fa-bars'}></i>
                </div>
            <li>
            <Link to='/addlog'>
                    <button className='primary-btn'>Admin</button>
                </Link>
            </li>
                
            
            
        </div>
    </nav>

   

   </div>
  )
}

export default Navbar
