import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'

const Update = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState('');
    const [ method, setMethod ] = useState('');
    const [ ratings, setRatings] = useState('');
    const [ error, setError ] = useState('');

    useEffect(() => {
        const fetchJuice = async () => {
            const { data, error } = await supabase
            .from('Juice')
            .select()
            .eq("id", id)
            .single()

            if (error) {
              navigate('/', { repalce: true })
            }

            if (data) {
                setTitle(data.title)
                setMethod(data.method)
                setRatings(data.ratings)
                console.log(data)
            }
        }

        fetchJuice()
    }, [id, navigate])


    const handleSubmit = async (e) => {
      e.preventDefault()
    
      const { data, error } = await supabase
      .from('Juice')
      .update({ title, method, ratings })
      .eq("id", id)
      .select()

      if (error) {
        setError("Please fill out all fields of the form")
      }

      if (data) {
        setError(null)
        navigate('/')
      }

    }

  return (
    <div className="page update">
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
              onChange={(e) => setRatings(e.target.value)}
            />
            <button>Update Juice</button>
        </form>
        {error && (<p className='error'>{error}</p>)}
    </div>
  )
}

export default Update