import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../Destionations/Sdata';

import { db } from '../Pages/firebase';

import { addDoc, collection, getDocs } from 'firebase/firestore';
//import { addDoc, collection, getDocs } from "firebase/firestore";

function Book(props) {

    

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [number, setNumber] = useState('');
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))

        if(item){
            setItem(item)
        }

    }, [id] )

    // const [name, setName] = useState('');
    

    //method that books
    const Book = () => {


        const collectionRef = collection(db, 'Book');

        const AddBookings = {
            fullname: fullname,
            id: id,
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


    }
    return (
        <body className='main-bg'>
            <div className='form'>
                <div className='form-text'>
                  
                </div>
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
                        <span>How many people?</span>
                        <select name='people' id='people' onChange={(e => setPeople(e.target.value))} >
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            
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
                        <button onClick={Book} type='submit' className='btn btn-dark btn-leg btn-block'>Book Now </button>

                         
                    </div>
                </div>
            </div>

        </body>

    )
}

export default Book