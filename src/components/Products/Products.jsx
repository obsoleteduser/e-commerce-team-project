import React, { useContext, useEffect } from 'react'
import { network } from '../../axios/network'
import { GlobalContext } from '../../GlobalStateManagement';
import { ClipLoader } from 'react-spinners'
import './Product.css'

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
                <div key={product?.id} className='card'>
                    <img src={product?.image}/>
                    <p className='product-title'>{product?.title}</p>
                    <p>{product?.price}$</p>
                </div>
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
