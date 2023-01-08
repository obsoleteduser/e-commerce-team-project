import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header>
            <div className='header-contacts-section'>
                <div>Need help Call us: (+98) 0234 456 789</div>
                <div className='header-contacts-right-side'><div className='header-contacts-right-side-left-part'><img className='header-contacts-section-img' src='src\assets\img\location-pin-solid.svg' alt='img'></img> Our store</div><div className='header-contacts-right-side-right-part'><img className='header-contacts-section-img' src='src\assets\img\truck-solid.svg'></img> Track your order</div></div>
            </div>
            <nav className='header-nav-section'>
                <div className='header-nav-section-left-part'>
                    <div className='header-nav-section-logo'><img className='header-nav-section-img' src='src\assets\img\logo.png'></img></div>
                    <div className='header-nav-section-input'><input placeholder='Search any thing...' type="text" /> <button>Search</button></div>
                </div>
                <div className='header-nav-section-right-part'>
                    <div className='header-nav-section-user'><img src='src\assets\img\user-solid.svg'></img>Sign in</div>
                    <div className='header-nav-section-heart'><img src='src\assets\img\heart-solid.svg'></img>Log in</div>
                    <div className='header-nav-section-cart'><img src='src\assets\img\cart-shopping-solid.svg'></img>Cart in</div>
                </div>
            </nav>
            <div className='header-pages-section'>
                <div className='header-pages-section-browse'><select><option>Browse categories</option></select></div>
                <div>
                    <ul className='header-pages-section-ul'>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>About US</li>
                    </ul>
                </div>
                <div className='header-pages-section-label'>30 Days Free return</div>
            </div>
        </header>
    )
}

export default Header
