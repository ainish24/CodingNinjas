import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header.jsx'
import GetStarted from './components/GetStarted.jsx'
import Movies from './components/Movies'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <GetStarted/>
      <Movies />
    </>
  )
}

export default App
