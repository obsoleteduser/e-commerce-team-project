import './App.css'
import BProduct from './components/Banner/BProduct'
import ProductSlider from './components/Banner/ProductSlider'
import Newproducts from './components/NewProduct/Newproducts'
import { Main } from './pages/Main'

function App() {

  return (
    <div className="App">
      <BProduct />
      <ProductSlider />
      <Newproducts />
      {/* <Main></Main> */}
    </div>
  )
}

export default App
