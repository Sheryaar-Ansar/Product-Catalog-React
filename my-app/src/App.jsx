import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductApp from './components/ProductApp'
import ProductNavbar from './components/ProductNavbar'
import { Routes, Route } from 'react-router-dom'
import ProductId from './components/ProductId'
import ProductCart from './components/ProductCart'


function App() {

  return (
    <>
      <ProductNavbar/>
      <Routes>
        <Route path='/' element={<ProductApp/>} />
        <Route path='/:id' element={<ProductId/>} />
        <Route path='/cartlist' element={<ProductCart/>} />
      </Routes>
    </>
  )
}

export default App
