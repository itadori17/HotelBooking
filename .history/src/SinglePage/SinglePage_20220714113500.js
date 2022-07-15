import React from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../Components/sub/HeadTitle'
import "./singlepage.css"

const SinglePage = () => {
  return (
    <>
      <HeadTitle/>
      <section className='single-page top'>
        <div className='container'>
            <Link to='/rooms'></Link>
        </div>
      </section>
    </>
  )
}

export default SinglePage
