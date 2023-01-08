import React from 'react'
import "./banner.css"
import canon from '../../assets/img/canon.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";

function BProduct() {
  return (
    <div className='banner'>
        <Swiper 
        style={{
          "--swiper-navigation-color": "orange",
          "--swiper-pagination-color": "orange",
        }}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        pagination={{clickable:true}}
        modules={[Autoplay, Pagination]} 
        className="mySwiper"
        >
          <SwiperSlide>
            <div className='carousell'>
                <div>
                    <h1 className='heading-canon-h1'>Canon camera</h1>
                    <div className='buttons-banner'>
                        <button className='shopButton'>Shop Now</button>
                        <button className='viewButton'>View more</button>
                    </div>
                </div>
                <div className='img-canon'>
                  <img src={canon} alt="" />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='carousell'>
                <div>
                    <h1 className='heading-canon-h1'>Canon camera</h1>
                    <div className='buttons-banner'>
                        <button className='shopButton'>Shop Now</button>
                        <button className='viewButton'>View more</button>
                    </div>
                </div>
                <div className='img-canon'>
                  <img src={canon} alt="" />
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BProduct