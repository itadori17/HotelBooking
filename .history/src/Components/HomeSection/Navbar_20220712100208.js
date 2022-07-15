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
            <div className='logo'>
                <img src={Logo} alt=''/>
            </div>
            <div className='meni-icon' onClick={handleClick}>
                <i class={click? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click? 'nav-manu active' : 'nav-menu'}>
                <li><Link to ='/' onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to ='/about' onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to ='/rooms' onClick={closeMobileMenu}>Rooms</Link></li>
                    <li><Link to ='/photos' onClick={closeMobileMenu}>Photos</Link></li>
                    <li><Link to ='/reviews' onClick={closeMobileMenu}>Reviews</Link></li>
                    <li><Link to ='/contact' onClick={closeMobileMenu}>contact Us</Link></li>
                    

                

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
    <header>
    <div className='contact flex_space'>
            <div className='box flex_space'>
                <div className='icons'>
                    <i className='far fa-clock'></i>
                </div>
                <div className='text'>
                    <h4>Working Hours</h4>
                    <Link to="/contact">Monday - Sunday: 9.00am to 7.00pm</Link>
                </div>
            </div>
            <div className='box flex_space'>
                <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                </div>
                <div className='text'>
                    <h4>Call Us</h4>
                    <Link to="/contact">+016 123 4567</Link>
                </div>
            </div>&emsp;&emsp;&emsp;
            <div className='box flex_space'>
                <div className='icons'>
                    <i className='far fa-envelope'></i>
                </div>&emsp;&emsp;&emsp;
                <div className='text'>
                    <h4>Mail Us</h4>
                    <Link to="/contact">bhisqhietslodge@gmail.com</Link>
                </div>
            </div>

        </div>
    </header>
   </div>
  )
}

export default Navbar
