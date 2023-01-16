import React, { useContext, useEffect, useState } from 'react'
import './Catalog.css'
import { Products } from '../components/Products/Products'
import { GlobalContext } from '../GlobalStateManagement'
import { Card } from '../components/Card/Card'
import { ClipLoader } from 'react-spinners'
import { withNewProp } from '../components/HOC/EnhancedProducts'
import axios from 'axios'

const EnhancedProducts = withNewProp(Products)

export const Catalog = () => {
  const [catalogCategory, setCatalogCategory] = useState([])
  const {products, loading, setCategory} = useContext(GlobalContext)

  const catalogFetch = (e) => {
    setCategory(e.target.value);
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
    .then((res) => setCatalogCategory(res.data))
  }, [])
  
  
  return (
    <div className="catalog">
      <div className='catalog-category-div'>
          {
            catalogCategory && catalogCategory.map((item, i) => (
              // console.log(item),
              <div className='categories' key={i}>
                <input onChange={catalogFetch} value={item} className='checkbox' type="checkbox" />
                <label htmlFor="checkbox">{item}</label>
              </div>
            ))
          }
      </div>
      <EnhancedProducts>
      { !loading ?
            products.map(product =>(
               <Card key={product.id} product={product}></Card> 
            ) )
            : <div className="loader">
                <ClipLoader
            color="#1B5A7D"
            size={100}
          />
            </div>
        }
      </EnhancedProducts>
    </div>
  )
}
