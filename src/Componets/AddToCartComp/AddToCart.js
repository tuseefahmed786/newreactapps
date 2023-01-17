
import {React,useState} from 'react'
import { UseCart } from './CartContext'
import '../CssXomponets/CartPage.css'
export default function SectionTwo(props) {
const [first, setfirst] = useState(0)
const {state} = UseCart()

if (state.quantity.quantity >= 1) {
  var vvvvv = state.addtocar
  console.log(vvvvv)
  var qunatity = state.quantity.quantity

  // var getPrice = state.addtocar.pricepr
  
// // var plus = multiple.map((e)=> e + e)

// var dddd = multiple.map((e)=>{
// return  
// });
  // console.log(dddd)
} else {
  console.log("dojj")
}

  return (
    <>
    <div className="heroBox">
    <header>
      <h1>Cart{props.totalQ}</h1>
    </header>
    <div className="cart_cover">
    <div className="addtocart">
    {
      qunatity >= 1 ? vvvvv.map((e,index)=>{
    
        return <InnerCart CartImage={e.imagelink} cartText={e.desPr} cartPrice={e.pricepr} quantity={qunatity} /> 


        
      })
      :"Empty Cart"
    }
    </div>


<div className="cart_detialsBox">
 <div className="checkout_btn padLR">
 <button className='checkout_button'>Continue to Checkout</button>
 </div>

 <div style={{textAlign:"center"}}><p  className="padLR">For the best shopping experience.</p></div>
 <hr className='hr-cart' />
  
  <div className="total_cart padLR">
    <div className="subTotal_text">
      <div className="inner_subText">
      <p className='fW-7 mr-1'>Subtotal</p>
      <p className='mid-blk'>({qunatity} items)</p>
      </div>
    </div>

    <div className="subPrice_text">
      <div className="inner_subPrice_text">
        <p className='mid-blk cf-16'>453$</p>
      </div>
    </div>
  </div>

  <div className="total_cart padLR mid-blk">
    <div className="subTotal_text">
      <div className="inner_subText">
      <p>Shipping</p>
      </div>
    </div>

    <div className="subPrice_text">
      <div className="inner_subPrice_text">
        <p className='Csgreen '>Free</p>
      </div>
    </div>
  </div>

  <div className="total_cart padLR">
    <div className="subTotal_text">
      <div className="inner_subText">
      <p className='fW-7 '>Taxes</p>
      </div>
    </div>

    <div className="subPrice_text">
      <div className="inner_subPrice_text">
        <p className='mid-blk'>10%</p>
      </div>
    </div>
  </div>
  <hr className='hr-cart' />


  <div className="total_cart padLR">
    <div className="subTotal_text">
      <div className="inner_subText">
      <p className='fW-7'>Estimated total
</p>
      </div>
    </div>

    <div className="subPrice_text">
      <div className="inner_subPrice_text">
        {/* {vvvvv.map((e)=> <p className=' fW-7'>{e.pricepr * qunatity }</p> )} */}
      </div>
    </div>
  </div>
</div>



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
  <p> {props.cartText}</p>
  <div className="cart_price">
  <p>Price - $ {props.cartPrice}</p>
  <p> Quantity - {props.quantity}</p>
  {/* <p>Total Amount - $ {props.price.toFixed(2)}</p>  */}
 
</div>
</div>


    </div>

</>
  )
}