import { useState } from 'react'
import logo from './logo.svg'
import './Card.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Intetrests'
import Footer from './components/Footer'

function Card() {

  return (
    <div className="body">
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
      
    </div>
  )
}

export default Card
