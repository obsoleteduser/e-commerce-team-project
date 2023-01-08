import React from 'react'
import "./newproduct.css"
import jbl from '../../assets/img/jbl bar.svg'
import joystick from '../../assets/img/joystick.svg'
import bigLaptop from '../../assets/img/big-laptop.svg'

function Newproducts() {
  return (
    <div className='newProduct'>
      <div className='jbl-img'>
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
