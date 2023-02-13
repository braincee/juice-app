import React from 'react'
import { HiPencil } from 'react-icons/hi';
import { FcEmptyTrash } from 'react-icons/fc';
import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient';

const JuiceCard = ({ juice, onDelete }) => {

  const handleDelete = async () => {

    const { data, error } = await supabase
    .from("Juice")
    .delete()
    .eq("id", juice.id)
    .select()

    if (error) {
      console.log(error)
    }

    if (data) {
      onDelete(juice.id)
    }
  }


  return (
    <div className='juice-card'>
        <h3>{juice.title}</h3>
        <p>{juice.method}</p>
        <div className='rating'>{juice.ratings}</div>
        <div className='buttons'>
          <Link to={'/' + juice.id} className="pencil"><HiPencil size={20}/></Link>
          <FcEmptyTrash size={20} className="trash" onClick={handleDelete} />
        </div>
    </div>
  )
}

export default JuiceCard;