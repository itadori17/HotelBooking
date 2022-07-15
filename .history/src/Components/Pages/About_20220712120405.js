import React from 'react'
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <div>
      <section className='about top'>
        <div className='container'>
            <AboutCard/>
            </div> 
      </section>

      <section className='features top'>
        <div className='container aboutCard flex-space'>
            <div className='row row1'>
                <h1>
                    Our <span>Features</span>
                </h1>
            </div>
        </div>

      </section>
    </div>
  )
}

export default About
