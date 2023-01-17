import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({product}) => {
    
  return (
    <div key={product.id} className='card'>
                    <img src={product.image}/>
                    <p className='product-title'>{product.title}</p>
                    <p>{product.price}$</p>
                    <i style={{
                      width: "4rem",
                      height: "4rem",
                      cursor: "pointer"
                    }} class="fa-solid fa-heart">
                    <img src='src/assets/img/heart-solid.svg'></img>
                    </i>
                   
                    
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

