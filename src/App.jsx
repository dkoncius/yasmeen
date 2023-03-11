import React from 'react'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import './App.css'

// Pages
import Home from './pages/Home'
import Model from './pages/Model'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* To check change url /model and /home */}
      <Route path="/" element={<Home />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="model" element={<Model />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
