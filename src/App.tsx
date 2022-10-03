import React from 'react';
import './App.css';
import './styles.css'

import Navbar from './components/Navbar/Navbar'
import CardContainer from './components/CardContainer/CardContainer';

import LulaLogo from './assets/lula-logo-dark.png'
import OnMLogo from './assets/onm-logo-dark.png'
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div className="home-body">
      <div className="hero-Container">
        <h1>Welcome to PCDI</h1>
        <p>
        PCDI is a tech company developing and using disruptive technology to create, enter, and innovate niche B2B and B2C markets and industries. PCDI's first target is vending machines across the US.
        Here at PCDI we are driven to provide the world with convenience through technological disruption.
        </p>
      </div>
      <div className='body'>
        <h1 id='body'>Our Subsidiaries</h1>
        <CardContainer
          title="Ookii na Manga" 
          description="OnM is the go-to online marketplace for all prints associated with manga, comics, and similar art types. OnM provides a unique and distinct community for weebs to discover, transform, preserve, and share their passion through our customizable print options including electronics, wall decor, home goods, etc." 
          image={OnMLogo}/>
        <CardContainer 
          title='Lula' 
          description='Lula is the Future of Automated Retail. It is a marketplace for the vending machine industry connecting vendors, suppliers, and consumers.' 
          image={LulaLogo} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
