import React, { useState } from 'react'

import "./navbar.css"
import { Link } from 'react-router-dom'



export default function Navbar() {
  const [setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='navbar'>
        <li className='nav-item'>
          <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to ='/login' className='nav-links' onClick={closeMobileMenu}>
            Login
          </Link>
          <Link to ='/signup' className='nav-links' onClick={closeMobileMenu}>
            SignUp
          </Link>
          <Link to ='/housing' className='nav-links' onClick={closeMobileMenu}>
            Housing
          </Link>
        </li>
    </div>
    
  )
}
