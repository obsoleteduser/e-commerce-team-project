import React from 'react'
import './Main.css'
import BProduct from '../components/Banner/BProduct'
import { Products } from '../components/Products/Products'
import ProductsFilter from '../components/ProductsFilter/ProductsFilter'
import ProductSlider from "../components/Banner/ProductSlider"
import Newproducts from "../components/NewProduct/Newproducts"
import Latest from "../components/Latest News/Latest"

export const Main = () => {
  return (
    <div className='Main'>
        <BProduct/>
        <ProductSlider/>
        <ProductsFilter />
        <Products />
        <Newproducts />
        <Latest/>
    </div>
  )
}
