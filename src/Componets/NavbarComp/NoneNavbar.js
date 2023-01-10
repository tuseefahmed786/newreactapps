import React from "react";
import { useState } from "react";
import "../CssXomponets/ICNoneNav.css";
import NavbarDropDown from "./NavbarDropDown";
export default function NoneNavbar() {
  const [innernav, setinnernav] = useState(false);
  const [nav, setnav] = useState(false);
  const alldpdata = [
    {
      dpnames: "The Christmas Shop",
      id: 1,
    },
    {
      dpnames: "Toys & Video Games",
      id: 2,
    },
    {
      dpnames: "Deals & Gifts",
      id: 3,
    },
    {
      dpnames: "The Christmas Shop",
      id: 4,
    },
    {
      dpnames: "Toys & Video Games",
      id: 5,
    },
    {
      dpnames: "Deals & Gifts",
      id: 6,
    },
    {
      dpnames: "The Christmas Shop",
      id: 7,
    },
    {
      dpnames: "Toys & Video Games",
      id: 8,
    },
    {
      dpnames: "Deals & Gifts",
      id: 9,
    },
  ];
  function showli(event) {
  const he = event.target.id 

  // eslint-disable-next-line eqeqeq
  if (he == 1) { 
    setinnernav(true)
  
  }else{
    setinnernav(false)
  }
 
  // eslint-disable-next-line eqeqeq
  if (he == 2) {
    setnav(true)
  } else  {
    setnav(false)
  } 

  }

  return (
    <>
      <div className="inner_navbar loading">
        <div className="Inav_align">
          <div className="In_first">
            <div className="categiory_name">
              <h4>All Depraments</h4>
            </div>
            <ul>
              {alldpdata.map((check) => {
                return (
                  <li onMouseEnter={showli} id={check.id} key={check.id}>
                    {check.dpnames}       
                  </li>
                );
              })}
            </ul>
          </div>
      
         {innernav ? <NavbarDropDown depend={true} /> : ""     }
         {nav ? <NavbarDropDown depend={false} /> : ""     }
         
        </div>
      </div>
    </>
  );
}
