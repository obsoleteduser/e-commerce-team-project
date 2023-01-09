import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Layout } from './components/Layout/Layout'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Catalog } from './pages/Catalog'
import { Main } from './pages/Main'
import { Pages } from './pages/Pages'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route index element={<Main></Main>} ></Route>
      <Route path='/catalog' element={<Catalog></Catalog>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/pages' element={<Pages></Pages>}></Route>
      </Route>
     </Routes>
    </div>
  )
}

export default App
