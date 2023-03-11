import React from 'react'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import './App.scss'

// Pages
import Home from './pages/Home'
import Model from './pages/Model'

// Components
import Header from './components/Header';

function App() {

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      {/* To check change url /model and /home */}
      <Route path="/" element={<Home imageDetails={imageDetails} />} /> 
      <Route path="/home" element={<Home imageDetails={imageDetails}/>} />
      <Route path="model" element={<Model imageDetails={imageDetails}/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
