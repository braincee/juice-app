import React from 'react'
import { HiPencil } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const JuiceCard = ({ juice }) => {
  return (
    <div className='juice-card'>
        <h3>{juice.title}</h3>
        <p>{juice.method}</p>
        <div className='rating'>{juice.ratings}</div>
        <div className='buttons pencil'>
            <Link to={'/' + juice.id}><HiPencil /></Link>
        </div>
    </div>
  )
}

export default JuiceCard;