import React from "react";
import HeroBox from "./HeroXomponets/HeroBox";
import HeroMiniBox from "./HeroXomponets/HeroMiniBox";
import Product from '../Componets/HeroXomponets/Product'
export default function HeroSection() {
 
  return (
   <>
   <div  >
   <div className="heroBox">
   <HeroBox/>
   <HeroMiniBox/>
   <Product/>
   </div>
   </div>
   </>
  );
}
