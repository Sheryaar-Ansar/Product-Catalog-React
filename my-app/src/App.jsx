import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductApp from './components/ProductApp'
import ProductNavbar from './components/ProductNavbar'
import { Routes, Route } from 'react-router-dom'
import ProductId from './components/ProductId'


function App() {

  return (
    <>
      <ProductNavbar/>
      <Routes>
        <Route path='/' element={<ProductApp/>} />
        <Route path='/:id' element={<ProductId/>} />
      </Routes>
    </>
  )
}

export default App
