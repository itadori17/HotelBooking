import React from 'react'
import Card from '../HomeSection/Card'
import GalleryData from '../HomeSection/GalleryData'
import Navbar from '../HomeSection/Navbar'
import HeadTitle from '../sub/HeadTitle'
import "../styles/gallery.css"

const Gallery = () => {
  return (
    <>
     <Navbar/>
      <HeadTitle/>
      <section className='gallery top'>
        <div className='container grid'>
            {
                GalleryData.map((value) => {
                    return <Card images={value.img} title={value.title} />
                })
            }
            <Card/>
        </div>
      </section>
    </> 
  )
}

export default Gallery
