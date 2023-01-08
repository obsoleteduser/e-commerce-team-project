import React from 'react'
import './ProductFilter.css'

const ProductsFilter = () => {
  return (

      <div className="product-controller">
        <p className='section-title'>Popular products</p>
      <div className="buttons">
      <button className='cameras cbtn'>Cameras</button>
        <button className='laptops cbtn'>Laptops</button>
        <button className='tablets cbtn'>Tablets</button>
        <button className='mouse cbtn'>Mouse</button>
      </div>
      </div>
    
  )
}

export default ProductsFilter
