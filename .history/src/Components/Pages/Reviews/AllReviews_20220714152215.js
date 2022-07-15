import React, { useState } from 'react'
import RevCard from './RevCard'
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
              <RevCard/>
            </div>
        </div>
      </section>
    </>
  )
}

export default AllReviews
