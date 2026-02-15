import React from 'react'
import Intro from './components/Intro'
import AWSLearning from './components/AWSLearning'
import CatalystLearning from './components/CatalystLearning'
import AttemptsJourney from './components/AttemptsJourney'
import KeyLearnings from './components/KeyLearnings'
import ClosingNote from './components/ClosingNote'
import './App.css'

function App() {
  return (
    <div className="app">
      <Intro />
      <AWSLearning />
      <CatalystLearning />
      <AttemptsJourney />
      <KeyLearnings />
      <ClosingNote />
    </div>
  )
}

export default App
