import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header>
            <div className='header-contacts-section'>
                <div>Need help Call us: (+98) 0234 456 789</div>
                <div className='header-contacts-section-right-side'>
                    <div className='header-contacts-section-right-side-left-part'>
                        <img src='src\assets\img\location-icon.svg' alt='location'></img> Our store</div>
                    <div className='header-contacts-section-right-side-right-part'>
                        <img src='src\assets\img\truck-icon.svg'></img> Track your order</div>
                </div>
            </div>
            <nav className='header-nav-section'>
                <div className='header-nav-section-left-part'>
                    <div className='header-nav-section-left-part-logo'>
                        <img src='src\assets\img\main-logo.svg'></img>
                    </div>
                    <div className='header-nav-section-left-part-search'>
                        <input placeholder='Search...' type="text" /> <button>Search</button>
                    </div>
                </div>
                <div className='header-nav-section-right-part'>
                    <div className='header-nav-section-right-part-user'>
                        <img src='src\assets\img\user-icon.svg'></img><div>Sign in</div>
                    </div>
                    <div className='header-nav-section-right-part-heart'>
                        <img src='src\assets\img\heart-icon.svg'></img><div>Log in</div>
                    </div>
                    <div className='header-nav-section-right-part-cart'>
                        <img src='src\assets\img\cart-icon.svg'></img><div>Cart</div>
                    </div>
                </div>
            </nav>
            <div className='header-pages-section'>
                <div>
                    <select className='header-pages-section-browse'>
                        <option>Browse categories</option>
                    </select>
                </div>
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
