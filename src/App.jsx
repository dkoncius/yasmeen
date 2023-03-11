import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Pages
import AnimatePages from './pages/AnimatePages';
  
// Components
import Header from './components/Header';

// Style
import './App.scss'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <AnimatePages/>
  </BrowserRouter>
  )
}

export default App
