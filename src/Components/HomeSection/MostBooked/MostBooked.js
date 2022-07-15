import React from 'react'
import MostCard from './MostCard'
import './mostbooked.css'

const MostBooked = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
            <div className='heading'>
                <h1>Most Booked Rooms</h1>
                <div className='line'></div>
            </div>
            <div className='content'>
                <MostCard/>
            </div>
        </div>
      </section>
    </>
  )
}

export default MostBooked
