import React from 'react'
import "./newproduct.css"
import jbl from '../../assets/img/jbl bar.svg'
import joystick from '../../assets/img/joystick.svg'
import bigLaptop from '../../assets/img/big-laptop.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";

function Newproducts() {
  return (
    <div className='newProduct'>
      <div className='jbl-img'>
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
          <div className='jbl-div'>
            <img src={jbl} alt="" />
            <div className='title'>
                <h3>JBL bar 2.1 deep bass</h3>
                <p>$11,70</p>
                <div className='numbers'>
                    <div className='num'>57</div>
                    <div className='num'>11</div>
                    <div className='num'>33</div>
                    <div className='num'>59</div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='jbl-div'>
            <img src={jbl} alt="" />
            <div className='title'>
                <h3>JBL bar 2.1 deep bass</h3>
                <p>$11,70</p>
                <div className='numbers'>
                    <div className='num'>57</div>
                    <div className='num'>11</div>
                    <div className='num'>33</div>
                    <div className='num'>59</div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      <div className='divs'>
        <div className='joystick-img'>
            <img src={joystick} alt="" />
            <div className='title'>
                <p>Play Game</p>
                <p>$11,70</p>
            </div>

        </div>
        <div className='big-laptop'>
            <img src={bigLaptop} alt="" />
            <div className='title'>
                <p>Play Game</p>
                <p>$11,70</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newproducts