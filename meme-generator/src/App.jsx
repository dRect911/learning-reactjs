import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Generator from './components/Generator'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Generator />
    </div>
  )
}

export default App
