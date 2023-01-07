import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer/Footer'
// import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header/>
        {/* <Routes>
          <Route path='/'  />
        </Routes> */}
        <Footer />
    </div>
  )
}

export default App
