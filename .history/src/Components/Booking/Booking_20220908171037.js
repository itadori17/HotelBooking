import React, { useState } from 'react'
import Footer from '../HomeSection/Footer'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'
//importing firestore
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Pages/firebase';

function Booking(props) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [number, setNumber] = useState('');
  
const Booking = () => {
  
  const collectionRef = collection(db, 'Book');

        const AddBookings = {
            fullname: fullname,
            email: email,
            people: people,
            checkin: checkin,
            checkout: checkout,
            number: number
        };
        addDoc(collectionRef, AddBookings).then(() => {
            alert('booked successfully')
        }).catch((error) => {
            console.log(error);

        })
      \

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
