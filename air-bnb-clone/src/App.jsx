import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainFeed from './components/MainFeed'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainFeed />
    </div>
  )
}

export default App
