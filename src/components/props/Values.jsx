import React from 'react'

const Values = (props) => {
    return (
        <div className=' p-5 bg-p2 rounded-lg  content-center flex-row grow '>
            <h3 className='text-s1 h6 text-center'>{props.title}</h3>
            <p className='text-white pt-5 base text-center'>{props.body}</p>
        </div>
      )
    }

export default Values