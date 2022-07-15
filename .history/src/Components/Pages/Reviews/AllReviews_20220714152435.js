import React, { useState } from 'react'

import RevData from './RevData'

const AllReviews = () => {
    const [items, setItems] = useState(RevData)
  return (
    <>
      <section className='blog top'>
        <div className='container'>
            <div className='content grid'>
                {items.map((item) => {
                    return<RevData key={item.id} item={item} />
                })}
            
            </div>
        </div>
      </section>
    </>
  )
}

export default AllReviews
