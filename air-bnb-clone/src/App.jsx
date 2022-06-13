import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
//<Hero />
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  )
}

export default App
