import React, { useState } from 'react'
import Footer from '../HomeSection/Footer'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'
//importing firestore
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Pages/firebase';

f

const Booking = () => {
  const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [number, setNumber] = useState('');

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
