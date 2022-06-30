import { useState } from 'react'
import './App.css'
import Destination from './components/Destination'
import Navbar from './components/Navbar'
import data from './components/data'

function App() {
  const Destinations = data.map(item => {
    return (<Destination 
    key={item.id}
    {...item}

    />)
  });


  return (
    <div className="App">
      <Navbar />
      <div className="destinations">
        {Destinations}
      </div>
    </div>
  )
}

export default App
