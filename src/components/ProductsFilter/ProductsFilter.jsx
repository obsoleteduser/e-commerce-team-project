import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalStateManagement'
import './ProductFilter.css'

const ProductsFilter = () => {

  const {category, setCategory} = useContext(GlobalContext)

 


  return (

      <div className="product-controller">
        <p className='section-title'>Popular products</p>
      <div className="buttons">
      <button onClick={()=>{setCategory('electronics')}} className='cbtn'>Electronics</button>
        <button onClick={()=>{setCategory('jewelery')}} className='cbtn'>Jewelery</button>
        <button onClick={()=>{setCategory("men's clothing")}} className='cbtn'>Men's clothing</button>
        <button onClick={()=>{setCategory("women's clothing")}} className='cbtn'>Women's clothing</button>
      </div>
      </div>
    
  )
}

export default ProductsFilter
