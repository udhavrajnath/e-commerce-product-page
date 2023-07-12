import React, { useState } from 'react'
import "../styles/Productpage.css"

function Productpage(e) {
  const [ItemAmount,SetAmount]=useState(0)
  const [ItemsSelected,setItemsSelected]=useState([])

  function UpdateCart(e){
    let tempArr=[...ItemsSelected]

    if(e.target.checked==true){
      if(ItemsSelected.includes(e.target.value)==false){
        tempArr=[...ItemsSelected,e.target.value]
      }
    }
    else{
      if(ItemsSelected.includes(e.target.value)==true){
        tempArr.splice(tempArr.indexOf(e.target.value),1)
      }
    }   
    setItemsSelected(tempArr)
  }
  

  function UpdateItemNumber(e){
    if(e=='inc'){
      SetAmount(ItemAmount+1)
    }
    else if(e=='dec'&& ItemAmount>0){
      SetAmount(ItemAmount-1)
    }else if(ItemAmount==0&&e=='dec'){
      SetAmount(0)
    }
  }

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
          <div className='ItemDesc'>
          <label><input type='checkbox' value='dog' onChange={(e)=>UpdateCart(e)}/>Dog</label>
          <label><input type='checkbox' value='cat' onChange={(e)=>UpdateCart(e)}></input>Cat</label>
          <label><input type='checkbox' value='duck'onChange={(e)=>UpdateCart(e)}></input>Duck</label><br/>
          {ItemsSelected}
          </div>
          <div className='AddToCart'>
            <div className='Inc_DecItems'>
              <div className='Decrement'><button value={'dec'} onClick={(e)=>UpdateItemNumber(e.target.value)}>-</button></div>
              <div className='Amount'>{ItemAmount}</div>
              <div className='Increment'><button value={'inc'} onClick={(e)=>UpdateItemNumber(e.target.value)}>+</button></div>
            </div>
            <div className='AddToCartBtn'><button>Add To Cart</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productpage