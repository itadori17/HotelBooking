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
                    <Link to ='/'>Home</Link>&nbsp;&nbsp;
                    <Link to ='/about'>About</Link>&nbsp;&nbsp;
                    <Link to ='/rooms'>Rooms</Link>&nbsp;&nbsp;
                    <Link to ='/photos'>Photos</Link>&nbsp;&nbsp;
                    <Link to ='/reviews'>Reviews</Link>&nbsp;&nbsp;
                    <Link to ='/contact'>contact Us</Link>&nbsp;
                    

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
