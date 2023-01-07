import React from 'react'
import "./banner.css"
import canon from '../../assets/img/canon.svg'

function BProduct() {
  return (
    <div className='banner'>
      <div>
        <h1>Canon Camera</h1>
        <button>Shop Now</button>
        <button>View more</button>
      </div>
      <div>
        <img src={canon} alt="" />
      </div>
    </div>
  )
}

export default BProduct
