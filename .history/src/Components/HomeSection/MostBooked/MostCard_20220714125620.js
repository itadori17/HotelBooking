import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MostData from './MostData';


const MostCard = () => {
  return (
    <>
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
                    <div className=''></div>
                    <h3>
                    {(Value.price)}<span>Per Night</span>
                    </h3>
                </div>
        </div>
      </div>
        )})
    }
    </>
  )
}

export default MostCard
