import React from 'react'
import logo from '../../assets/pcdi-logo-dark.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <a href="./"> 
        <img src={logo} className="logo" alt="PCDI logo"></img>
      </a>
      <div className="navlinks">
        <a href="./">Home</a>
        <a href="https://ookiinamanga.com/">OnM</a>
        <a href="./">Lula</a>
        <a href="./">About</a>
        <a href="./">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;