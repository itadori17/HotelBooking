import React from 'react'
import RoomsItem from './RoomsItem'

const Features = () => {
  return (
    <>
      <section className='popular top'>
        <div className='Full_container'>
          <div className='heading'>
            <h1>Most Popular Rooms</h1>
            <div className='line'></div>
          </div>
          <div className='content'>
            <RoomsItem/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
