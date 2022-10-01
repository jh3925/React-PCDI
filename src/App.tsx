import React from 'react';
import logo from './assets/pcdi-logo-dark.png';
import './App.css';

//This App.tsx file serves as a place to build components together. 
//It may be placed into seperate files later.

function Navbar() {
  return (
    <div className="App-navbar">
      <a href="./"> 
        <img src={logo} className="App-logo" alt="PCDI logo"></img>
      </a>
      <div className="App-navlinks">
        <a href="./">Home</a>
        <a href="./">About Us</a>
        <a href="https://ookiinamanga.com/">Ookii na Manga</a>
        <a href="./">Lula</a>
        <a href="./">Contact</a>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="App-body">
      <div>
        <h1>About Us</h1>
        <p>
        PCDI is a tech company developing and using disruptive technology to create, enter, and innovate niche B2B and B2C markets and industries. PCDI's first target is vending machines across the US.
        Here at PCDI we are driven to provide the world with convenience through technological disruption.
        </p>
      </div>
      <div>
        <h1>Our Subsidiaries</h1>
        <p>Lula is the Future of Automated Retail. It is a marketplace for the vending machine industry connecting vendors, suppliers, and consumers."</p>
        <p>OnM is the go-to online marketplace for all prints associated with manga, comics, and similar art types. OnM provides a unique and distinct community for weebs to discover, transform, preserve, and share their passion through our customizable print options including electronics, wall decor, home goods, etc.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
