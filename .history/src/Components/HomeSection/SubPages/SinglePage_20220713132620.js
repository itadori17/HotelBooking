import React, {useState, useEffect }from 'react'
import { Link, useParams} from 'react-router-dom'
import HeadTitle from '../../sub/HeadTitle'
import Navbar from '../Navbar'
import Sdata from '../Sdata'
import Emptypage from './Emptypage'
import "./singlepage.css"

const SinglePage = () => {

    const {id} = useParams()

    const [item, setItem] =useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))

        if (item) {
            setItem(item)
        }
}, [id])

  return (
    <>
    <Navbar/>
      <HeadTitle/>
      {item ? (

      <section className='single-page top'>
        <div className='container'>
            <Link to='/rooms' className='primary-btn back'>
            <i className='fas fa-long-arrow-alt-left'></i>
            </Link>
                

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.image} alt='' />
                </div>
            </article>
        </div>  

      </section>
      ) : (
        <Emptypage />
      )}
    </>
  )
}

export default SinglePage
