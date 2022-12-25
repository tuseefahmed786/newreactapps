import React from 'react'

import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/Navbar'
import Working from './Componets/InnerCompnets/PageWorking';
export default function App() {
  if(window.location.pathname === "/pageworking"){
return <Working/>
  }
  return (
    <>
    
   
     <Navbar/>
       <HeroSection/>
 
  
    </>
  )
}
