import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../images/logo.jfif"

const Navbar = () => {

    
  return (
    <div>
    <nav className='navbar'>
        <div className='container flex_space'>
            <div className='meni-icon'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <ul className='nav-manu active'>
                <li>
                    <Link ro ='/'>Home</Link>
                    <Link ro ='/about'>About</Link>
                    <Link ro ='/rooms'>Rooms</Link>
                    <Link ro ='/photos'>Photos</Link>
                    <Link ro ='/reviews'>Reviews</Link>
                    <Link ro ='/contact'>contact Us</Link>
                    

                </li>

            </ul>
            <div className='Login-area flex'>
                <li>
                    <Link to='/'>
                        <i className='far fa-chevron-right'>Admin</i>
                    </Link>
                </li>

            </div>


        </div>
    </nav>
   </div>
  )
}

export default Navbar
