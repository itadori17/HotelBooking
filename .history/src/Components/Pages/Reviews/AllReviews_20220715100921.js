import React from 'react'
import { Value } from 'sass'
import Rcard from './Rcard'
import Rdata from './Rdata'

const AllReviews = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container mtop'>
            {Rdata.map((value, index) =>{
                 return <Rcard key={index} { ...value}/>
            })}
        </div>
      </section>
    </>
  )
}

export default AllReviews
