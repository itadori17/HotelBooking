import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import RevData from '../Reviews/RevData'
import EmptyFile from '../../../Components/EmptyFile/EmptyFile'
import HeadTitle from '../Components/sub/HeadTitle'

const RevSinglepage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = RevData.find((item) => item.id === parseInt(id))

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
                        <p>{item.para}</p>
                    </div>
                </div>

                <div className='side-content'>
                    <div className='category-list'>
                        <h2>Category</h2>
                        <hr/>
                        <ul>
                            {
                                RevData.map((item) => {
                                    return(
                                        <li>
                                            <i className='far fa-play-circle'></i>
                                            {item.category}
                                        </li>
                                    )
                                })
                            }

                        </ul>
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




   


