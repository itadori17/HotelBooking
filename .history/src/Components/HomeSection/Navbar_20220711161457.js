import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../images/logo.jfif"

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(!click)
  return (
    <div>
    <nav className='navbar'>
        <div className='container flex_space'>
            <div className='meni-icon' onClick={handleClick}>
                <i class={click? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click? 'nav-manu active' : 'nav-menu'}>
                <li><Link to ='/' onClick={closeMobileMenu}>Home</Link></li>&emsp;
                    <li><Link to ='/about' onClick={closeMobileMenu}>About</Link></li>&emsp;
                    <li><Link to ='/rooms' onClick={closeMobileMenu}>Rooms</Link></li>&emsp;
                    <li><Link to ='/photos' onClick={closeMobileMenu}>Photos</Link></li>&emsp;
                    <li><Link to ='/reviews' onClick={closeMobileMenu}>Reviews</Link></li>&emsp;
                    <li><Link to ='/contact' onClick={closeMobileMenu}>contact Us</Link></li>&emsp;
                    

                

            </ul>
            <div className='Login-area flex'>
                <li>
                    <Link to='/'>
                        <button className='primary-btn'>Admin</button>
                    </Link>
                </li>

            </div>


        </div>
    </nav>
   </div>
  )
}

export default Navbar
