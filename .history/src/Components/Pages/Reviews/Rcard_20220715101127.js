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
      </div>
    </>
  )
}

export default Rcard
