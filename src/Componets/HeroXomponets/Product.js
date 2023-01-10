/* eslint-disable eqeqeq */
import { React } from "react";
import { UseFullPageHook } from "../FullProductComp/FContext";
import { Link } from "react-router-dom";
import P1 from "../InnerAssets/p1.webp";
import P2 from "../InnerAssets/p2.webp";
import P3 from "../InnerAssets/FullPIc/pr2pic1.png";
import P4 from "../InnerAssets/p4.webp";
import P5 from "../InnerAssets/p5.webp";


export default function Product() {
 

  const { singalProduct } = UseFullPageHook();

  function getProductId(e) {
    var productId = e.target.id;
    singalProduct(productId);
  }

  
  function PrLoop(props) {
    return (
    
      <div className="product_box">
        <Link onClick={getProductId} to="pagewoking">
        <div className="productfirst_align">
          <div className="product_img_align">
            
              <img src={props.prlink} alt="" id={props.idess} />
       
  
            <div className="button_absolute" id={props.idess}>
              <div className="pr_button_align dp_flex_allcenter"   >
              <button id={props.idess}>Open It</button>
              </div>
            </div>
          </div>
        </div>
      
          <div className="second_align" id={props.idess}>
            <div className="price_align">
              <h2>{props.pricepr}</h2>
            </div>
            <div className="pr_descr_align">
              <p id={props.idess}>{props.desPr}</p>
            </div>
            <div className="shipping_align">
              <h6>{props.shipping}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
 

  return (
    <>
      <div className="allproduct_alignments">
        {prdata.map((looppr, index) => {
          return (
            <>
              <PrLoop
                key={index}
                idess={index}
                prlink={looppr.imagelink}
                btncategiory={"Add Carts"}
                pricepr={looppr.pricepr}
                desPr={looppr.desPr}
                shipping={looppr.shipping}
              />
            </>
          );
        })}
      </div>
    </>
  );
}


const prdata = [
  {
    id: 0,
    imagelink: P1,
    btncategiory: "Option",
    pricepr: "$78",
    desPr:
      "PocketTunes Bone Conduction Instant Mini Speakers with Bluetooth Wireless Technology, Pack of 2 (Sierra Blue)",
    shipping: "3+ Days Shipping",
  },
  {
    id: 1,
    imagelink: P2,
    btncategiory: "Option",
    pricepr: "$56.6",
    desPr: "OZMI Kids Selfie Camera for Girls, Christmas Birthday Gift for Girls Age 3-12, 1080P Digital Camera for Kids",
    shipping: "4+ Days Shipping",
  },
  {
    id: 2,
    imagelink: P3,
    btncategiory: "Option",
    pricepr: "$89.6",
    desPr:
      "Keurig K-Duo Essentials Single Serve & Carafe Coffee Maker, Moonlight Gray",
    shipping: "1+ Days Shipping",
  },
  {
    id: 3,
    imagelink: P4,
    btncategiory: "Adds",
    pricepr: "$34.9",
    desPr: "Time And Tru Women's Crewneck Tee with Long Sleeves",
    shipping: "4+ Days Shipping",
  },
  {
    id: 4,
    imagelink: P5,
    btncategiory: "Option",
    pricepr: "$46.21",
    desPr: "Windows 10 Home Laptop Computer, XOPPOX 2022 Newest 13.5",
    shipping: "7+ Days Shipping",
  },
];
