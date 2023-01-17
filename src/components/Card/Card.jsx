import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import { GlobalContext } from '../../GlobalStateManagement'

export const Card = ({product}) => {

  const {setFavorites} = useContext(GlobalContext)
    
  return (
    <div key={product.id} className='card'>
                    <img src={product.image}/>
                    <p className='product-title'>{product.title}</p>
                    <p>{product.price}$</p>
                    <i onClick={(event)=>{setFavorites(prev=>[...prev, event.target.parentElement.parentElement.textContent])}} style={{
                      width: "4rem",
                      height: "4rem",
                      cursor: "pointer"
                    }} className="fa-solid fa-heart">
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

