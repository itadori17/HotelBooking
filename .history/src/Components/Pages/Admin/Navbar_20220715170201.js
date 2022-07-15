import React, {useState} from 'react'
import { Link } from "react-router-dom"

import Logo from "../../images/logo.jfif"

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
                <li><Link to='/dashboard' onClick={closeMobileMenu}>Dashboard</Link></li>
                <li><Link to='/guest' onClick={closeMobileMenu}>Guest</Link></li>
                <li><Link to='/allrooms' onClick={closeMobileMenu}>Rooms</Link></li>
                <li><Link to='/allbookings' onClick={closeMobileMenu}>Bookings</Link></li>
                
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
