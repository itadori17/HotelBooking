import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../Components/Destionations/Sdata'
import HeadTitle from '../Components/sub/HeadTitle'
import "./singlepage.css"

const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))

        if(item){
            setItem(item)
        }

    }, [id] )
  return (
    <>
      <HeadTitle/>
      <section className='single-page top'>
        <div className='container'>
            <Link to='/rooms' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.image} alt='' />
                </div>
            </article>
        </div>
      </section>
    </>
  )
}

export default SinglePage
