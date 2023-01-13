/* eslint-disable eqeqeq */
import {React} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/NavbarComp/Navbar'
import Working from './Componets/FullProductComp/FullProduct';
import AddToCart from './Componets/AddToCartComp/AddToCart'
export default function App() {
  
 return (
    <>


    <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="/newreactapps" element={<Navbar />}>
          <Route path="/newreactapps" element={<HeroSection />} />
          <Route path="pagewoking" element={<Working/>} />
        <Route path="carts" element={<AddToCart/>}/>
  
        </Route>
      </Routes>
    </BrowserRouter>

   

   
    </>
  )
}
