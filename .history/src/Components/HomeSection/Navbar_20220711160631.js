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
                    <Link to ='/'>Home</Link>&emsp;
                    <Link to ='/about'>About</Link>&emsp;
                    <Link to ='/rooms'>Rooms</Link>&emsp;
                    <Link to ='/photos'>Photos</Link>&emsp;
                    <Link to ='/reviews'>Reviews</Link>&emsp;
                    <Link to ='/contact'>contact Us</Link>&emsp;
                    

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
