import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MostData from './MostData';
import Slider from "react-slick";

const SampleNextArrow = (props) => {
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}
const MostCard = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide:2
            }
          }
          
        ]
    }
  return (
    <>
    <Slider { ...settings}>   
    {
        MostData.map((Value) => {

        return(
      <div className='cards'>
        <div className='item'>
            <div className='image'>
                <img src={(Value.image)} alt='' />
                
            </div>
            <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                </div> 
                <div className='details'>
                    <h2>{(Value.title)}</h2>
                    <div className='boarder'></div>
                    <h3>
                    {(Value.price)} / <span>Per Night</span>
                    </h3>
                </div>
        </div>
      </div>
        )})
    }
    </Slider>
    </>
  )
}

export default MostCard
