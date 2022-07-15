import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [allValue, setAllValue] = useState([]);

    const formSubmit = (e) => {
        e.preventdDefault()
        const newValue = {fname}
        setAllValue([ ...allValue, newValue])

        setFname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setMessage("")

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
                                Phone Number <label>*</label>
                            </span>
                            <input type='text' name='lname' id={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div> 
                        <div className='input'>
                            <span>
                                Email Address <label>*</label>
                            </span>
                            <input type='email' name='email' id={email} onChange={(e) => setEmail(e.target.value)} />
                        </div> 
                        <div className='input'>
                            <span>
                                Subject 
                            </span>
                            <input type='text' name='subject' id={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div> 
                        <div className='input inputlast'>
                            <span>
                                Message 
                            </span>
                            <textarea type='message' value={message} cols='30' rows='10' onChange={(e) => setMessage(e.target.value)} />
                        </div> 
                    </div>
                    <button className='primary-btn'>Send</button>
                </form>
            </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((currentValue) => {
            const {fname, phone, email} = currentValue
            return(
                <div className='sing-box'>
            <h1>Successfully Sent Form</h1>
            <h3>
                First Name: <p>{fname}</p>
            </h3>
            <h3>
               Phone: <p>{phone}</p>
            </h3>
            <h3>
             Email : <p>{email}</p>
            </h3>
        </div>

            )
        })}
        
      </section>
    </>
  )
}

export default ContactForm
