import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MostData from './MostData';
import Slider from "react-slick";


const MostCard = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
            <div className='imgae'>
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
