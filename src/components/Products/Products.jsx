import React from 'react'
import './Product.css'

const Products = () => {
  return (
    <div  className='products-container'>
      <div className="product-controller">
        <p className='section-title'>Popular products</p>
      <div className="buttons">
      <button className='cameras cbtn'>Cameras</button>
        <button className='laptops cbtn'>Laptops</button>
        <button className='tablets cbtn'>Tablets</button>
        <button className='mouse cbtn'>Mouse</button>
      </div>
      </div>
    </div>
  )
}

export default Products
