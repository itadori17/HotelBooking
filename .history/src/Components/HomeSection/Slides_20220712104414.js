import React, {useState} from 'react'
import Data from './Data'

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
    {Data.map((slide,index) => {
    return(
        
        <div className={index === current ? "slide active" : "slide" } key={index} >
            {index === current && <img src = {slide.image} alt ="Home Image" /> } 
            </div>
    )
     })}

    </div>
  )
}

export default Slide
