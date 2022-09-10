import React from 'react'
import Footer from '../HomeSection/Footer'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'
//importing firestore
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Pages/firebase';

const Booking = () => {
  return (
    <>
      <Navbar/>
      <HeadTitle/>
        <section></section>
      <Footer/>
    </>
  )
}

export default Booking
