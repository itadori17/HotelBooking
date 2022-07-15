import React from 'react'
import { Link } from 'react-router-dom'


const Dcard = ({ item: {id, image, title, desc, sidepara,paraImage_one,paraImage_two , price }}) => {
  return (
    <>
        <div className='items'>
            <div className='img'>
                <img src={image} alt='' />

                <Link to='/'>
                    <i className='fas fa-external-link-alt'></i>
                </Link>
            </div>
            <div className='title'> 
                <h3></h3>
            </div>
                
            
        </div>
      
    </>
  )
}

export default Dcard
