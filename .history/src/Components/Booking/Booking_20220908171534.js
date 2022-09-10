import React, { useState } from 'react'
import Footer from '../HomeSection/Footer'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'
//importing firestore
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Pages/firebase';


 
  
const Booking = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [number, setNumber] = useState('');

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
      
      
  return (
    <>
      <Navbar/>
      <HeadTitle/>
        <section>
        <div className='main-form'>

    <div>
    <span>Your full name?</span>
    <input type="text" name="name" id="name" onChange={(e => setFullname(e.target.value))} />
      </div>
    <div>
    <span>Your Email address?</span>
    <input type="email" name="name" id="name" onChange={(e => setEmail(e.target.value))} />
    </div>
    <div>
    <span>Number ?</span>
    <select name='people' id='people' onChange={(e => setPeople(e.target.value))} >
        <option value=''></option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        
    </select>

</div>
<div>
    <span>Check-in</span>
    <input type="date" name="name" id="name" onChange={(e => setCheckin(e.target.value))} />
</div>
<div>
    <span>Check-out</span>
    <input type="date" name="name" id="name" onChange={(e => setCheckout(e.target.value))} />
</div>
<div>
    <span>Your phone number?</span>
    <input type="text" name="name" id="name" onChange={(e => setNumber(e.target.value))} />
</div>
<div id='submit'>
    <button onClick={Home} type='submit' className='btn btn-dark btn-leg btn-block'>Book Now <NavLink to="/"></NavLink></button>

     
</div>
</div>
        </section>
      <Footer/>
    </>
  )
}

export default Booking
