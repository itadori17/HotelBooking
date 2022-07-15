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

        </div>
    </nav>
   </div>
  )
}

export default Navbar
