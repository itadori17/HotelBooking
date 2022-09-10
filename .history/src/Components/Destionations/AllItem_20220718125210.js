import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'
import '../Destionations/Destination.css'

const AllItem = () => {
    const [items, setItem] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className=''>
            <div className='content grid'>
                {
                    items.map((item) => {
                        return < Dcard key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
