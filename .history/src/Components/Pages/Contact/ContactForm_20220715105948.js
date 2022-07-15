import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [allValue, setAllValue] = useState([]);

    const formSubmit = (e) => {

        const newValue = {fname}
        setAllValue([ ...allValue, newValue])

    }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
            <div className='main-content'>
                <h2>Contact Form</h2>
                <p>Kindly out the form below, we will get back to you soon.</p>

                <form onSubmit={formSubmit }>
                    <div className='grid1'>
                        <div className='input'>
                            <span>
                                First Name <label>*</label>
                            </span>
                            <input type='text' name='fname' id={fname} onChange={(e) => setFname(e.target.value)} />
                        </div><br/>
                        <div className='input'>
                            <span>
                                Last Name <label>*</label>
                            </span>
                            <input type='text' name='lname' id={lname} onChange={(e) => setLname(e.target.value)} />
                        </div> 
                    </div>
                    <button className='primary-btn'>Send</button>
                </form>
            </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((currentValue) => {
            const {fname, lname} = currentValue
            return(
                <div className='sing-box'>
            <h1>Successfully Sent Form</h1>
            <h3>
                First Name: <p>{fname}</p>
            </h3>
            <h3>
               Last Name: <p>{lname}</p>
            </h3>
        </div>

            )
        })}
        
      </section>
    </>
  )
}

export default ContactForm
