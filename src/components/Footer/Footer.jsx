import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className='footer-subscribe-section'>
        <div>Subscribe Newsteller</div>
        <div>
          <button>Email address</button>
          <img className='footer-subscribe-section-telegram' src='src\assets\img\email-send-icon.svg'></img>
        </div>
        <div>
          <img className='footer-subscribe-section-headphone' src='src\assets\img\headphone-icon.svg'></img>Call us 24/7:
          <br></br> (+62) 0123 567 789
        </div>
      </div>
      <div className='footer-description-section'>
        <div className='footer-description-section-main-info'>
          <div>
            <img src='src\assets\img\footer-logo.svg'></img>
          </div>
          <div>64 st james boulevard
            hoswick , ze2 7zj
          </div>
          <hr></hr>
          <div className='footer-description-section-main-info-social'>
            <img src='src\assets\img\google-icon.svg'></img>
            <img src='src\assets\img\facebook-icon.svg'></img>
            <img src='src\assets\img\whatsapp-icon.svg'></img>
          </div>
        </div>
        <div className='footer-description-section-find-product'>
          <h4>Find product</h4>
          <ul>
            <li>Brownze arnold</li>
            <li>Chronograph blue</li>
            <li>Smart phones</li>
            <li>Automatic watch</li>
            <li>Hair straighteners</li>
          </ul>
        </div>
        <div className='footer-description-section-get-help'>
          <h4>Get help</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>
        <div className='footer-description-section-about-us'>
          <h4> About us</h4>
          <ul>
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Custmer care</li>
            <li>Faq’s</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
