import React from 'react'
import { Link } from 'react-router-dom'

        
        const RevCard = ({item: {id, date, category, title, cover, para, desc}}) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
            <img src={cover} alt='' />
        </div>
        <div className='category flex_space'>
        <span>{date}</span>
        <label>{category}</label>
        </div>
        <div className='details'>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
        <div>
            <Link to={`/revsinglepage/${id}`} className="blogItem-link">
                Read More<i className='fa fa-long-arrow-alt-right'></i>
            </Link>
        </div>
      </div>
    </>
  )
}

export default RevCard
