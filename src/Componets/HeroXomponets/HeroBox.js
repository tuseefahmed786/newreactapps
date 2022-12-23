import React from 'react'
import '../InnerCSS/HeroBox.css'
import Heroox from '../InnerAssets/heroimage1.webp'
import Herooxtwo from '../InnerAssets/heroimage2.webp'
export default function HeroBox() {
  return (
    <>
  
     <div className="hero_alignbox">
        <div className="heroBox_img">
           <a href="https://www.walmart.com/search?q=applewatch%20series%207%2041mm&typeahead=applewatch"> <img src={Heroox} alt="foijo" /></a>

            
        </div>
        <div className="heroBox_img_two">
            <a href="https://www.walmart.com/cp/toy-rollbacks/4030159"><img src={Herooxtwo} alt="foijo"  /></a>
        </div>
        </div>
        
        
    </>
  )
}
