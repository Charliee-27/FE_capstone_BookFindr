import React from 'react'

const ReasonsCard = (props) => {
  return (
    <div className='p-5 bg-black rounded-lg text-center'>
        <h3 className='text-s1 h6'>{props.title}</h3>
        <p className='text-white pt-5 base'>{props.body}</p>
    </div>
  )
}

export default ReasonsCard