import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import Header from './widgets/Header'
import Home from './page/Home'
import About from './page/About'
import Login from './page/Login.jsx'
import Footer from './widgets/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
