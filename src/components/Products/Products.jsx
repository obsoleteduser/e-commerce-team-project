import React, { useContext, useEffect } from 'react'
import { network } from '../../axios/network'
import { GlobalContext } from '../../GlobalStateManagement'
import './Product.css'

export const Products = () => {

    const {products, setProducts} = useContext(GlobalContext)
    const fetchData = async ()=>{
        const data = await network.getProducts('./products/category/electronics?limit=8')
        console.log(data.data)
        setProducts(data.data)
    }

    useEffect(()=>{
        fetchData()
    }, [])

  

  return (
      <div className="products">
        {
            products.map(product =>(
                <div key={product.id} className='card'>
                    <img src={product.image}/>
                    <p className='product-title'>{product.title}</p>
                    <p>{product.price}$</p>
                </div>
            ) )
        }
      </div>
  )
}
