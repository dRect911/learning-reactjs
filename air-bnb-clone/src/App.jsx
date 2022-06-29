import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  });
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        {cards}
      </div>
      <Hero />
    </div>
  )
}

export default App
