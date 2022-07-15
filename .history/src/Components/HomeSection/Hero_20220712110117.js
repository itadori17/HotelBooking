import React from 'react'
import Slide from './Slides'
import Data from './Data'
import '../styles/slide.css'


const Hero =() => {
  return (
    <div>
        <Slide slides={Data}/>
      
    </div>
  )
}


export default Hero