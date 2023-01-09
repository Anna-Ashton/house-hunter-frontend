import React from 'react'
import Home from '../homepage/Home'
import Login from '../login/Login'
import SignUp from '../signup/SignUp'
import Housing from '../housing/Housing'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-item'><Home/></div>
        <div className='nav-item'><Login/></div>
        <div className='nav-item'><SignUp/></div>
        <div className='nav-item'><Housing/></div>
    </div>
    
  )
}
