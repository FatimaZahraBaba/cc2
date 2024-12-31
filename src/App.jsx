import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<AddContact />} />
            <Route path='/edit/:id' element={<EditContact />} />
            <Route />
          </Routes>
    </>
  )
}

export default App
