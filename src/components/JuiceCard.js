import React from 'react'

const JuiceCard = ({ juice }) => {
  return (
    <div className='juice-card'>
        <h3>{juice.title}</h3>
        <p>{juice.method}</p>
        <div className='rating'>{juice.ratings}</div>
    </div>
  )
}

export default JuiceCard;