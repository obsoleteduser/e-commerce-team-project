import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({product}) => {
    
  return (
    <div key={product.id} className='card'>
                    <img src={product.image}/>
                    <p className='product-title'>{product.title}</p>
                    <p>{product.price}$</p>
                </div>
  )
}

Card.propTypes = {

    product: PropTypes.shape({
        id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
    }
    )
    
}

