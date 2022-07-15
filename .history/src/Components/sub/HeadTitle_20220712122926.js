import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/headTitle.css'

const HeadTitle = () => {
    const location = useLocation()
  return (
    <>
        <section className='image-heading'>
        <div className='container'>
            <h1>{location.pathname.split("/")[1]}</h1>

            <button>
                <link to='/'>Home
                </link>
                <span>{location.pathname.split('/')[1]}</span>
            </button>
        </div>
        </section>
    
    </>
  )
}

export default HeadTitle
