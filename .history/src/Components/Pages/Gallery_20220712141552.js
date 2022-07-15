import React from 'react'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'

const Gallery = () => {
  return (
    <>
     <Navbar/>
      <HeadTitle/>
      <section className='gallery top'>
        <div className='container grid'>
            <h1>Card</h1>
        </div>
      </section>
    </> 
  )
}

export default Gallery
