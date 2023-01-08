import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className='footer-subscribe-section'>
        <div>Subscribe Newsteller</div>
        <div><button>Email address</button><img className='footer-subscribe-section-telegram' src='src\assets\img\telegram.svg'></img></div>
        <div><img className='footer-subscribe-section-headphone' src='src\assets\img\headphones-simple-solid.svg'></img>Call us 24/7:<br></br> (+62) 0123 567 789</div>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer
