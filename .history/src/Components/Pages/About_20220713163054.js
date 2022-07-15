import React from 'react'
import AboutCard from "./AboutCard"
import HeadTitle from '../sub/HeadTitle'
import Navbar from '../HomeSection/Navbar'

const About = () => {
  return (
    <>
        <Navbar/>
        <HeadTitle/>
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
                <p> We offer child friendly accommodation and can also accommodate guests in wheelchairs.
            </p>
            <p>You can be assured of the best service, comfort and hospitality at the Aark Guest Lodge.

            </p>
            <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
            </div>
            <div className='row image'>
        <img src='/images/bar.jpg' alt=''/>
        <div className='control-btn'>
            <button className='prev'>
                <i className='fas fa-play'></i>
            </button>
        </div>

        </div>
        </div>

      </section>
    </>
  )
}

export default About
