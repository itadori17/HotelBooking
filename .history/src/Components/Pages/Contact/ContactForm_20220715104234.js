import React from 'react'
import './contact.css'

const ContactForm = () => {
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
            <div className='main-content'>
                <h2>Contact Form</h2>
                <p>Kindly out the form below, we will get back to you soon.</p>

                <form>
                    <div className='grid1'>
                        <div className='input'>
                            <span>
                                First Name <label>*</label>
                            </span>
                            <input type='text' name='fname' id='' />
                        </div>           
                    </div>
                    <button className='primary-btn'>Send</button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
