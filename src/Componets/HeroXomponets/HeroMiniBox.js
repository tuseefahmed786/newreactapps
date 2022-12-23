import React from "react";
import BoxPic1 from "../InnerAssets/heorbox1one.webp";
import BoxPic2 from "../InnerAssets/heorbox1two.webp";
import BoxPic3 from "../InnerAssets/heorbox1three.webp";
import BoxPic4 from "../InnerAssets/herobox2one.webp";
import BoxPic5 from "../InnerAssets/herobox2two.webp";
import BoxPic6 from "../InnerAssets/herobox2three.webp";
import BoxPic7 from "../InnerAssets/herobox2four.webp";
import BoxPic8 from "../InnerAssets/boxpic3one.webp";
import BoxPic9 from "../InnerAssets/boxpic3two.webp";
import BoxPic10 from "../InnerAssets/boxpic3three.webp";
import BoxPic11 from "../InnerAssets/boxpic3four.webp";
export default function HeroMiniBox() {
  return (
    <>
      <div className="align_main_box">
        <div className="First_AllBox">
          <div className="Hminibox">
            <div className="box_align">
              <h1>Reserve pickup or delivery</h1>
              <a className="customize_button" href="/">
                Shop All
              </a>
            </div>
          </div>

          <div className="Hminibox2">
            <div className="box_align">
              <h1>Top departments</h1>
              <a
                href="/"
                style={{ textDecoration: "underline", color: "black" }}
              >
                View All
              </a>
            </div>
            <div className="box2_content_img">
             <a href="https://www.walmart.com/cp/christmas-decor/7472650">
             <div className="Box2Img_align">
                <img src={BoxPic1} alt="" />
                <p>Christmas Shop</p>
              </div>
             </a>
              <a href="https://www.walmart.com/browse/home/indoor-christmas-decorations/4044_2634414_7472650_5678379?povid=GlobalNav_DSK_Christmas-Indoor">
              <div className="Box2Img_align">
                <img src={BoxPic2} alt="" />
                <p>Deals</p>
              </div>
              </a>
             <a href="https://www.walmart.com/cp/toys/4171">
             <div className="Box2Img_align">
                <img src={BoxPic3} alt="" />
                <p>Toys</p>
              </div>
             </a>
            </div>
          </div>
        </div>
        <div className="Secondbox_mini mini">
<Ii boxtitle="Reserve pickup or delivery" boxpixtitle1="Stocking stuffers" boxpixtitle2="Gifts for kids" boxpixtitle3="Gifts Cards" boxpixtitle4="Shop All" 
  img1={BoxPic4} img2={BoxPic5} img3={BoxPic6} img4={BoxPic7}
/>
</div>
      
        
        <div className="Secondbox_mini mini2">
        <Ii boxtitle="Hot deals they'll love" boxpixtitle1="Up to 45% off tech" boxpixtitle2="Up to 50% off toys" boxpixtitle3="Up to 25% off seasonal decor" boxpixtitle4="Flash Pixk" 
  img1={BoxPic8} img2={BoxPic9} img3={BoxPic10} img4={BoxPic11}
/>
        </div>
      </div>
    </>
  );
}


function Ii(props) {
  return(
    <>
      
          <div className="box_align">
            <h1>{props.boxtitle}</h1>
          

           
          </div>
          <div className="box2_content_img box3">
             <a className="width50" href="https://www.walmart.com/cp/christmas-decor/7472650">
             <div className="Box2Img_align">
                <img src={props.img1} alt="" />
                <p>{props.boxpixtitle1} </p>
              </div>
             </a>
              <a className="width50" href="https://www.walmart.com/browse/home/indoor-christmas-decorations/4044_2634414_7472650_5678379?povid=GlobalNav_DSK_Christmas-Indoor">
              <div className="Box2Img_align">
                <img src={props.img2} alt="" />
                <p>{props.boxpixtitle2}</p>
              </div>
              </a>
             <a className="width50" href="https://www.walmart.com/cp/toys/4171">
             <div className="Box2Img_align">
                <img src={props.img3} alt="" />
                <p>{props.boxpixtitle3}</p>
              </div>
             </a>
             <a className="width50" href="https://www.walmart.com/cp/christmas-decor/7472650">
             <div className="Box2Img_align">
                <img src={props.img4} alt="" />
                <p>{props.boxpixtitle4}</p>
              </div>
             </a>
            </div>
        
    </>
  )
}