import React from 'react'
import "./banner.css"
import canon from '../../assets/img/canon.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function BProduct() {
  return (
    <div className='banner'>
      <div className='carousell'>
        <Carousel showThumbs={false}>
            <div>
                <h1 className='heading-canon-h1'>Canon camera</h1>
                <div className='buttons-banner'>
                    <button className='shopButton'>Shop Now</button>
                    <button className='viewButton'>View more</button>
                </div>
            </div>
            <div>
                <h1 className='heading-canon-h1'>Canon Camera</h1>
                <button className='shopButton'>Shop Now</button>
                <button className='viewButton'>View more</button>
            </div>
        </Carousel>
      </div>
      <div>
        <img src={canon} alt="" />
      </div>
    </div>
  )
}

export default BProduct
