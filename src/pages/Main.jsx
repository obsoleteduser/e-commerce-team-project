import React from 'react'
import BProduct from '../components/Banner/BProduct'
import { Products } from '../components/Products/Products'
import ProductsFilter from '../components/ProductsFilter/ProductsFilter'

import './Main.css'

export const Main = () => {
  return (
    <div className='Main'>
        <BProduct></BProduct>
        <ProductsFilter></ProductsFilter>
        <Products></Products>
    </div>
  )
}
