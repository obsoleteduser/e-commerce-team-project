import './App.css'
import BProduct from './components/Banner/BProduct'
import ProductSlider from './components/Banner/ProductSlider'
import { Main } from './pages/Main'

function App() {

  return (
    <div className="App">
      <BProduct />
      <ProductSlider />
      <Main></Main>
    </div>
  )
}

export default App
