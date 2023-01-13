
import React from 'react'
import { UseCart } from './CartContext'
import '../CssXomponets/CartPage.css'
export default function SectionTwo(props) {

const {state} = UseCart()

if (state.quantity.quantity >= 1) {
  var vvvvv = state.addtocar
  console.log(vvvvv)
  var qunatity = state.quantity.quantity
  var getPrice = state.addtocar[0].pricepr
  var totalValue = getPrice * qunatity
} else {
  console.log("dojj")
}

  return (
    <>
    <div className="heroBox">
    <header>
      <h1>Cart{props.totalQ}</h1>
    </header>
    <div className="addtocart">
    {
      qunatity >= 1 ? vvvvv.map((e,index)=>{
        return <InnerCart CartImage={e.imagelink} cartText={e.desPr} cartPrice={e.pricepr} quantity={qunatity} totalAmount={totalValue} />
      })
      :"Empty Cart"
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
  <p>$ {props.cartPrice}</p>
  <p> Quantity {props.quantity}</p>
  <p>Total Amount : $ {props.totalAmount.toFixed(2)}</p>
</div>
</div>


    </div>

</>
  )
}