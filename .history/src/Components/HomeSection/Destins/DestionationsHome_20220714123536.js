import React from 'react'
import AllItem from '../../Destionations/AllItem'
import '../MostBooked/mostbooked.css'

const DestionationsHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
            <div className='heading'>
                <h1>Most Popular Rooms</h1>
                <div className='line'></div>
            </div>
            <div className='content'>
                <AllItem/>
            </div>
        </div>
      </section>
    </>
  )
}

export default DestionationsHome
