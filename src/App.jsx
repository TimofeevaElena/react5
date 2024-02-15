import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Katalog from './components/Katalog/Katalog'
import Start from './components/Start/Start'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Start/>}></Route>
        <Route path="/katalog" element={<Katalog/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
