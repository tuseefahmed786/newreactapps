
import React from 'react'
import { UseShortContext } from '../Context/ProductContext'
import '../CssXomponets/CartPage.css'
export default function SectionTwo(props) {

const {addtocart} = UseShortContext()
console.log(addtocart)
  return (
    <>
    <div className="heroBox">
    <header>
      <h1>Cart{props.totalQ}</h1>
    </header>
    <div className="addtocart">
    {
      addtocart.map((e,index)=>{
        return <InnerCart CartImage={e[0].image} cartText={e[0].cartText} cartPrice={e[0].price}  />
      })
    }
    </div>
</div>
    </>
  )
}


function InnerCart(props) {
  return (
<>

 
    <div className="inner_addcart">
      <div className="cart_image">
<img src={props.CartImage} alt="" />
      </div>

<div className="cart_text">
  <p>{props.cartText}</p>
  <div className="cart_price">
  <p>{props.cartPrice}</p>
</div>
</div>


    </div>

</>
  )
}