import React from 'react'
import { Products } from '../components/Products/Products'
import ProductsFilter from '../components/ProductsFilter/ProductsFilter'
import './Main.css'

export const Main = () => {
  return (
    <div className='Main'>
        <ProductsFilter></ProductsFilter>
        <Products></Products>
    </div>
  )
}
