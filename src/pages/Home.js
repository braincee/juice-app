import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import JuiceCard from '../components/JuiceCard';

const Home = () => {

    const [ getError, getFetchError ] = useState(null);
    const [ allJuice, setJuice ] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) => {
      setJuice(prevJuice => {
        return prevJuice.filter(j => j.id !== id)
      })
    }

    useEffect(() => {
        const fetchJuiceData = async () => {
        const { data, error } = await supabase
        .from('Juice')
        .select()
        .order(orderBy, {ascending: false})
        
        if(error) {
            getFetchError('No Juice')
            setJuice(null)
        }

        if (data) {
            setJuice(data)
            getFetchError(null)
        }
        }

        fetchJuiceData()
    }, [orderBy])

  return (
    <div className="page home">
       {getError && (<p>{getError}</p>)}

       {allJuice && (
        <div className='juice'>
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('ratings')}>Rating</button>
          </div>
          <div className='juice-grid'>
            {allJuice.map(juice => (
                <JuiceCard 
                key={juice.id} 
                juice={juice} 
                onDelete={handleDelete}
                />
            ))}
          </div>
        </div>
       )}
      
    </div>
  )
}

export default Home
