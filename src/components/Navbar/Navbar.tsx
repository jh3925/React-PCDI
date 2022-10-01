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
          <a href="./">About Us</a>
          <a href="https://ookiinamanga.com/">Ookii na Manga</a>
          <a href="./">Lula</a>
          <a href="./">Contact</a>
        </div>
      </div>
    )
  }

export default Navbar