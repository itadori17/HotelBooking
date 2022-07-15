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
                    <Link to ='/'>Home</Link>
                    <Link to ='/about'>About</Link>
                    <Link to ='/rooms'>Rooms</Link>
                    <Link to ='/photos'>Photos</Link>
                    <Link to ='/reviews'>Reviews</Link>
                    <Link to ='/contact'>contact Us</Link>
                    

                </li>

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
