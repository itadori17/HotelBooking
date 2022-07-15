import React from 'react'
import Dcard from './Dcard'

const AllItem = () => {
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
            <div className='content grid'>
                {
                    DataTransferItemList.map((item) => {
                        return < Dcard/>
                    })
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
