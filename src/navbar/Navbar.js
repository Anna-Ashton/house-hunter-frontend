import React from 'react'
import Home from '../homepage/Home'
import Login from '../login/Login'
import SignUp from '../signup/SignUp'
import Housing from '../housing/Housing'
import "./navbar.css"

export default function Navbar() {
  return (
    <div>Navbar
        <div><Home/></div>
        <div><Login/></div>
        <div><SignUp/></div>
        <div><Housing/></div>
    </div>
    
  )
}
