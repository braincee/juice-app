import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient';

const Create = () => {
    
    const navigate = useNavigate()
    const [ title, setTitle ] = useState('');
    const [ method, setMethod ] = useState('');
    const [ ratings, setRating ] = useState('');
    const [ error, setError ] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !method || !ratings ) {
           setError('please fill out all fields of the form')
           return
        }

        const { data, error } = await supabase
        .from('Juice')
        .insert([{ title, method, ratings }])
        .select()

        if (error) {
            setError('please fill out all fields of the form')
        }

        if (data) {
            setError(null)
            navigate('/')
        }
    }

  return (
    <div className="page create">
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input 
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor='method'>Method</label>
            <textarea 
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />

            <label htmlFor='ratings'>Rating</label>
            <input 
              type="number"
              id="ratings"
              value={ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <button>Add Juice</button>
        </form>
        {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Create
