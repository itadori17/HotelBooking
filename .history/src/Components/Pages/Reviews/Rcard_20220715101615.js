import React from 'react'

const Rcard = (props) => {
  return (
    <>
      <div className='box'>
        <i className='fa fa-quote-left'></i>
        <div className='para'>
            <p>{props.decs}</p>
        </div>
        <hr />
        <div className='details flex'>
            <div className='img'>
                <img src={props.profile} alt='' />
            </div>
            <div className='name'>
                <h3>{props.desc}</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Rcard
