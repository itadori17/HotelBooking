import React, {useState} from 'react'
import Data from './Data'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slide = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length < 0) {
        return null
    }
  return (
    <div>
      <section className='slider'>
        <div className='control-btn'>
            <button className='prev' onClick={prevSlide}>
                <i className='fas fa-caret-left'></i>
            </button>
            <button className='next'>
                <i className='fas fa-caret-right' onClick={nextSlide}></i>
            </button>
        </div>
      </section>
      <Carousel infiniteLoop >
        <div className='images'>
          <img src='../images/logo.jfif' alt='mobile'/>
        </div>
        <div className='image'>
          <img src='../images/garden.jpg' alt='mobile'/>
        </div>
        <div className='image'>
          <img src='../images/wild.jpg' alt='mobile'/>
        </div>
        <div className='image'>
          <img src='../images/shoe4.jpg' alt='mobile'/>
        </div>
        <div className='image'>
          <img src='../images/shoe5.jpg' alt='mobile'/>
        </div>
      </Carousel>

    </div>
  )
}

export default Slide
