import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'

function App() {
  return (
    <div className="app">
      <Joke 
      setup="I got my daughter a fridge for her birthday."
      punch="I can't wait to see her face light up when she opens it."
      />
      <Joke 
      setup="How did the hacker escape the police?"
      punch="He just ransomware!"
      />
      <Joke 
      setup="Why don't pirates travel on mountain roads?"
      punch="Scurvy."
      />
      <Joke 
      setup="Why do bees stay in the hive in the winter?"
      punch="Swarm."
      />
      <Joke 
      setup="What's the best thing about Switzerland?"
      punch="I don't know, but the flag is a big plus!"
      />
      <Joke 
      punch="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke 
      setup="I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k."
      punch="It was a trip down Memory Lane."
      />
      <Joke 
      setup="Why do programmers always mix up Christmas and Halloween?"
      punch="Because Dec 25 is Oct 31."
      />
      <Joke 
      setup="Why do Java programmers have to wear glasses?"
      punch="Because they don’t C#."
      />
      <Joke 
      punch="If you listen to a UNIX shell, can you hear the C?"
      />
      <Joke 
      setup="What did the router say to the doctor?"
      punch="“It hurts when IP”"
      />
      <Joke 
      punch="“Debugging” is like being the detective in a crime drama where you are also the murderer."
      />
      <Joke 
      setup="//be nice to the CPU"
      punch="Thread_sleep(1);"
      />
      <Joke 
      punch="The best thing about a Boolean is that even if you are wrong, you are only off by a bit."
      />
      <Joke 
      punch="When Apple employees die, does their life HTML5 in front of their eyes?"
      />

    </div>
  )
}

export default App
