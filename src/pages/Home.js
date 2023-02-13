import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import JuiceCard from '../components/JuiceCard';

const Home = () => {

    const [ getError, getFetchError ] = useState(null);
    const [ allJuice, setJuice ] = useState(null);

    useEffect(() => {
        const fetchJuiceData = async () => {
        const { data, error } = await supabase
        .from('Juice')
        .select()
        
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
    }, [])

  return (
    <div className="page home">
       {getError && (<p>{getError}</p>)}

       {allJuice && (
        <div className='juice'>
          <div className='juice-grid'>
            {allJuice.map(juice => (
                <JuiceCard key={juice.id} juice={juice} />
            ))}
          </div>
        </div>
       )}
      
    </div>
  )
}

export default Home
