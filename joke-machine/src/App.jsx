import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'
import jokesData from './components/JokesData'

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punch={joke.punch} />
  });


  return (
    <div className="app">
      {jokeElements}
    </div>
  )
}

export default App
