import React from 'react'
import P1 from '../InnerAssets/p1.webp'
import P2 from '../InnerAssets/p2.webp'
import P3 from '../InnerAssets/p3.webp'
import P4 from '../InnerAssets/p4.webp'
import P5 from '../InnerAssets/p5.webp'






export default function Product() {
  return (
    <>
     <div className="allproduct_alignments">
   
      
     {prdata.map((looppr,index)=>{
            return (<PrLoop key={index} prlink={looppr.imagelink} btncategiory={looppr.btncategiory} pricepr={looppr.pricepr} desPr={looppr.desPr} shipping={looppr.shipping} />)
        })}
     </div>
    </>
  )
}

function PrLoop(props){
    return(
        <a href='/fullpage'>
   <div className="product_box">
   <div className="productfirst_align">
       <div className="product_img_align">
       <img src={props.prlink} alt="" />

       <div className="button_absolute">
  <div className="pr_button_align dp_flex_allcenter">
  <button>{props.btncategiory}</button>
   </div>
  </div>
       </div>
  
   </div>

   <div className="second_align">
       <div className="price_align">
       <h2>{props.pricepr}</h2>
       </div>
       <div className="pr_descr_align">
       <p>{props.desPr}</p>
       </div>
       <div className="shipping_align">
       <h6>{props.shipping}</h6>
       </div>
   </div>
</div>
</a>
    )
}

const prdata = [
    {
        imagelink:P1,
        btncategiory:"Option",
        pricepr:"$78",
        desPr:"PocketTunes Bone Conduction Instant Mini Speakers with Bluetooth Wireless Technology, Pack of 2 (Sierra Blue)",
        shipping:"3+ Days Shipping"

    },
    {
        imagelink:P2,
        btncategiory:"Option",
        pricepr:"$56.6",
        desPr:"Time And Tru Women's Crewneck Tee with Long Sleeves",
        shipping:"4+ Days Shipping"

    },
    {
        imagelink:P3,
        btncategiory:"Option",
        pricepr:"$89.6",
        desPr:"Keurig K-Duo Essentials Single Serve & Carafe Coffee Maker, Moonlight Gray",
        shipping:"1+ Days Shipping"

    },
    {
        imagelink:P4,
        btncategiory:"Adds",
        pricepr:"$34.9",
        desPr:"Time And Tru Women's Crewneck Tee with Long Sleeves",
        shipping:"4+ Days Shipping"

    },
    {
        imagelink:P5,
        btncategiory:"Option",
        pricepr:"$46.21",
        desPr:"Great Value Cage Free Large AA White Eggs, 18 Count",
        shipping:"7+ Days Shipping"

    },
   
]