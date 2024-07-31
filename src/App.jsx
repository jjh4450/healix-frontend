import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import Header from './widgets/Header'
import Home from './page/Home'
import Login from './components/Login.jsx'
import Footer from './widgets/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
