import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/juice.png';
import { CgMenuRound } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai'

const Navbar = () => {
    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav>
    <div className='logo'>
     <img src={Logo} alt="juice"/>
     <div><p>Juicy</p></div>
    </div>
    <div>
    <div className='links'>
      <button><Link to='/'>Home</Link></button>
       <button><Link to='/create'>Add Juice</Link></button>
     </div>
     <div>
        <CgMenuRound size={40} className="menu" onClick={handleNav}/>
      </div>
     <div className={nav ? "drawer" : "drawer-1"}>
       <div><AiFillCloseCircle size={40} onClick={handleNav} className='close'/></div>
       <div className='draw'>
         <div className='header'>
          <h1>Juicy Home</h1>
         </div>
        <div>
          <button><Link to='/' onClick={() => setNav(!nav)}>Home</Link></button>
         </div>
         <div>
           <button><Link to='/create' onClick={() => setNav(!nav)}>Add Juice</Link></button>
         </div>
        </div>
     </div>
    </div>
  </nav>
  )
}

export default Navbar