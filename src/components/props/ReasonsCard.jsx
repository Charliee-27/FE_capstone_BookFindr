import React from 'react'

const ReasonsCard = (props) => {
  return (
    <div className="p-5 bg-black rounded-lg flex flex-col items-center">
        <h3 className="text-s1 h6 text-center">{props.title}</h3>
        <p className="text-white pt-5 base text-center">{props.body}</p>
    </div>
  )
}

export default ReasonsCard;
