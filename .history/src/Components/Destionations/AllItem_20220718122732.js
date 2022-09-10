import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'

const AllItem = () => {
    const [items, setItem] = useState(Sdata)
  return (
    <>
      <section className='  '>
        <div className=''>
            <div className=''>
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
