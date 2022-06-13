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
        <Card 
        img='"./img/img_no_radius.png"'
        rate="5.0"
        reviews="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        cost="136"
        />

        <Card 
        img='"./img/img_no_radius.png"'
        rate="5.0"
        reviews="30"
        country="USA"
        title="Learn wedding photography"
        cost="125"
        />

        <Card 
        img='"./img/img_no_radius.png"'
        rate="4.5"
        reviews="2"
        country="USA"
        title="Group Mountain Biking"
        cost="50"
        />



        
      </div>
      
    </div>
  )
}

export default App
