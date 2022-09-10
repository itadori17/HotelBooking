import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../Components/Destionations/Sdata'
import EmptyFile from '../Components/EmptyFile/EmptyFile'
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
      {item ? (

      
      <section className='single-page top'>
        <div className='container'>
            <Link to='/rooms' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.image} alt='' />
                   

                    
                    <h1> {item.title}</h1>
                    <p>{item.desc}</p>
                    <div className='image grid1'>
                        <img src={item.paraImage_one} alt='' />
                        <img src={item.paraImage_two} alt='' />
                    </div>
                    <div className='para flex_space'>
                       <p>{item.sidepara}</p>
                       
                    </div>
                </div>

                <div className='side-content'>
                    <div className='box'>
                        <h2>Like What you See?</h2>
                       
                        <Link to='/bookings'>
                        <button className='outline-btn' >
                            
                            <i className='fa fa-book'>
                                Book Now
                            </i>
                           
                        </button>
                        </Link>
                    </div>
                   
                </div>
            </article>
        </div>
      </section>
      ) : (
         <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
