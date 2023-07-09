import React from 'react'
import "../styles/Productpage.css"

function Productpage() {
  return (
    <div className='ProductMain'>
      <div className='topbar'>
        <div className='Logo'>Sneakers</div>
        <div className='TopNavLeft'>
          <div className='TopNavLink'><a href='#'>Collections</a></div>
          <div className='TopNavLink'><a href='#'>Men</a></div>
          <div className='TopNavLink'><a href='#'>Women</a></div>
          <div className='TopNavLink'><a href='#'>About</a></div>
          <div className='TopNavLink'><a href='#'>Contact</a></div>
        </div>
        <div className='TopNavRight'>
          <div className='CartLogo'></div>
          <div className='ProfilePic'></div>
        </div>
      </div>

      <div className='MainContent'>
        <div className='ItemImage'>
          <div className='Imge'></div>
          <div className='Popup'>
            <div className='PopupImg'></div>
            <div className='PopupImg'></div>
            <div className='PopupImg'></div>
            <div className='PopupImg'></div>
          </div>
        </div>
        <div className='ItemDetails'>
          <div className='ItemDesc'></div>
          <div className='AddToCart'>
            <div className='Inc_DecItems'>
              <div className='Decrement'></div>
              <div className='Amount'></div>
              <div className='Increment'></div>
            </div>
            <div className='AddToCartBtn'><button>Add To Cart</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productpage