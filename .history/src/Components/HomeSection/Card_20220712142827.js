import React from 'react'

const Card = (props) => {
  return (
   
         <>
    <div className='items'>
      <div className='img'>
        <img src={props.images} alt='' />
        <i className='fas fa-image'></i>
        
      </div>
      <div className='title'>
        <h3>{props.title}</h3>
      </div>
      </div>

      <div className='popup'>
        <div className='hide'></div>
        <div className='popup-content'>
            <button>Close</button>
            <img src='' alt='' />
            
        </div>
      </div>
    </>
      
   
  )
}

export default Card
