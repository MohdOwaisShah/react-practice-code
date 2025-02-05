import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navigation from './Components/Navigation'

const App = () => {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </>
  )
}

export default App