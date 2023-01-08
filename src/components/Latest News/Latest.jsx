import React from 'react'
import Blog1 from '../../assets/img/Blog-1.svg'
import Blog2 from '../../assets/img/Blog-2.svg'
import './latest.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";

function Latest() {
  return (
    <div>
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
      className="mySwiper">
        <SwiperSlide>
          <div className='latest'>
            <div className='late-product'>
              <div><img src={Blog1} alt="" /></div>
              <div className='description'>
                  <div><div className='date-div'><p>22,oct,2021</p></div></div>
                  <h2>Who avoids a pain that produces?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
                  <p>By spacing tech</p>
              </div>
            </div>

            <div className='late-product'>
              <div><img src={Blog2} alt="" /></div>
              <div className='description'>
                  <div><div className='date-div'><p>22,oct,2021</p></div></div>
                  <h2>Who avoids a pain that produces?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
                  <p>By spacing tech</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='latest'>
            <div className='late-product'>
              <div><img src={Blog1} alt="" /></div>
              <div className='description'>
                  <div><div className='date-div'><p>22,oct,2021</p></div></div>
                  <h2>Who avoids a pain that produces?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
                  <p>By spacing tech</p>
              </div>
            </div>

            <div className='late-product'>
              <div><img src={Blog2} alt="" /></div>
              <div className='description'>
                  <div><div className='date-div'><p>22,oct,2021</p></div></div>
                  <h2>Who avoids a pain that produces?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
                  <p>By spacing tech</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Latest
