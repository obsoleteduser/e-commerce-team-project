import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Routes>
          <Route path='/'  />
        </Routes> */}
      <Footer />
    </div>
  )
}

export default App
