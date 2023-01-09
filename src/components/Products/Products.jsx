import React, { useContext, useEffect } from 'react'
import { network } from '../../axios/network'
import { GlobalContext } from '../../GlobalStateManagement';
import { ClipLoader } from 'react-spinners'
import './Product.css'
import { Card } from '../Card/Card';

export const Products = () => {

    const {products, 
        setProducts, 
        category,
        loading,
        setLoading
    } = useContext(GlobalContext)

    const fetchData = async ()=>{
        setLoading(true)
        const data = await network.getProducts(`./products/category/${category}?limit=8`)
        console.log(data.data)
        setProducts(data.data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    }, [category])

  

  return (
      <div className="products">
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
      </div>
  )
}