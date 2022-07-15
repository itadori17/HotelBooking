import React from 'react'

        
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
        
      </div>
    </>
  )
}

export default RevCard
