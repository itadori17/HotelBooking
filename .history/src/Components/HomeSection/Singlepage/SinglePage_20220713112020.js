import React from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../../sub/HeadTitle'
import Navbar from '../Navbar'
import "../Singlepage/singlepage.css"

const SinglePage = () => {
  return (
    <>
    <Navbar/>
      <HeadTitle/>

      <section className='single-page top'>
        <div className='container'>
            <Link to='/rooms' className='primary-btn back'></Link>
                <i className='fas fa-long-arrow-alt-left'></i>
        </div>  

      </section>
    </>
  )
}

export default SinglePage
