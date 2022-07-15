import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../Components/Destionations/Sdata'
import EmptyFile from '../Components/EmptyFile/EmptyFile'
import HeadTitle from '../Components/sub/HeadTitle'

const RevSinglepage = () => {
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
            <Link to='/reviews' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.cover} alt='' />
                   
                    <div className='category flex_space'>
                       <span>{item.date}</span>
                       <label>{item.category}</label>
                    </div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>

                    <h2>Two Column Text Sample</h2>
                    <div className='para flex_space'>
                        <p>{item.para}</p>
                    </div>
                </div>

                <div className='side-content'>
                    <div className='box'>
                        <h2>Have any questins?</h2>
                        <p>{item.sidepara}</p>
                        <button className='outline-btn'>
                            <i className='fa fa-phone-alt'>
                                Call Us
                            </i>
                        </button>
                    </div>
                    <div className='box2'>
                    <p>{item.sidepara}</p>
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

export default RevSinglepage




   

