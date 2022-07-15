import React from 'react'
import Dcard from './Dcard'

const RoomsItem = () => {
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
            <div className='content grid'>
                {
                    DataTransferItemList.map((item) => {
                        return < Dcard key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default RoomsItem
