import React from 'react'
import "./banner.css"
import Speaker from "../../assets/img/speaker.svg"
import Laptop from "../../assets/img/laptop.svg"
import Dslr from "../../assets/img/dslr-camera.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

function ProductSlider() {
  return (<>
  <div>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        >
      <SwiperSlide>
        <div className='product-slider'>
          <div className='product'>
            <img src={Speaker} alt="" />
            <div>
              <h3>Speaker</h3>
              <p>(6 items)</p>
            </div>
          </div>
          <div className='product'>
            <img src={Laptop} alt="" />
            <div>
              <h3>Desktop & laptop</h3>
              <p>(6 items)</p>
            </div>
            </div>
          <div className='product'>
            <img src={Dslr} alt="" />
            <div>
              <h3>DSLR camera</h3>
              <p>(6 items)</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-slider'>
          <div className='product'>
            <img src={Laptop} alt="" />
            <div>
              <h3>Desktop & laptop</h3>
              <p>(6 items)</p>
            </div>
            </div>
          <div className='product'>
            <img src={Speaker} alt="" />
            <div>
              <h3>Speaker</h3>
              <p>(6 items)</p>
            </div>
          </div>
          <div className='product'>
            <img src={Dslr} alt="" />
            <div>
              <h3>DSLR camera</h3>
              <p>(6 items)</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
  </>)
}

export default ProductSlider
