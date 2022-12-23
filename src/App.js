import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/Navbar'
import FullProduct from './Componets/InnerCompnets/FullProduct';
// import SectionTwo from './Componets/SectionTwo';
export default function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbar/>}>
          <Route index element={<HeroSection/>}/>
          <Route path='/fullpage'  element={<FullProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
