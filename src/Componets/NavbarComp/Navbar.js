/* eslint-disable eqeqeq */
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState  } from "react";
import "../CssXomponets/Nav.css";
import Wlogo from '../Assests/Logo/walmartLogo.svg'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import AppsIcon from "@mui/icons-material/Apps";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import NoneNavbar from "./NoneNavbar";
import { UseCart } from "../AddToCartComp/CartContext";
import { UseFullPageHook } from "../FullProductComp/FContext";

export default function Navbar(props) {
  const [navcheck, setnavcheck] = useState(false);
  const [searchbar, setsearchbar] = useState(true)
  const { state } = UseCart();
  const cartValue  = state.quantity.quantity

  // below search fuction and searc filter value are defined
  const {searchProduct,searchpr,singalProduct} = UseFullPageHook()

  console.log(searchpr)
  function hover() {
    setnavcheck(true);
    const gets = document.body;
    gets.addEventListener("mousedown", () => {
      setnavcheck(false);
      
    });
  }
   
function raduis(e) {
  
  if(e.target.value.length == 0){
    e.target.style.borderRadius = "32px"

  }else{
    e.target.style.borderRadius = "0px"
    console.log(e.target.value.length)
  }
  if (e.target.value.length >= 1) {
    setsearchbar(true)
  }
}


function getProductId(e) {
  var productId = e.target.id;
  singalProduct(productId);
  setsearchbar(false)

}
  return (
    <>
      <div className="header_align">
        <nav className="navbar d-flex-center">
          <div className="logo_align f-g1">
            <Link className="navbar-brand" to="">
              <img src={Wlogo} alt="" />
            </Link>
          </div>

          <div className="main-nav f-g2 d-flex-center">
            <div className="nav-item InNav f-g1">
              <div className="nav-inner nav-inner-left" onClick={hover}>
                <i className="icon_align">
                
                  <AppsIcon  />
                </i>
                <Link className="nav-link active" aria-current="page" to="">
                  Departments
                </Link>
              </div>
              {navcheck ? <NoneNavbar /> : ""}
            </div>
            <div className="nav-item f-g1" id="nav_in_2">
              <div className="nav-inner nav-inner-left">
              <i className="icon_align">
              <DragIndicatorOutlinedIcon />   
              </i> 
                <Link to="" className="nav-link">Services</Link>
              </div>
            </div>
            <div className="nav-item S_none f-g9 pos_sera" >
              <form className="nav-item" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search everything at Walmart online and in store"
                  aria-label="Search"
                  onChange={(e) => { searchProduct(e.target.value) ; raduis(e) } }
                 
                />
              
              </form>

          {searchbar ? searchpr?   <Link onClick={getProductId} to="pagewoking"> <div className="parent_postion">
              <div className="postion_serach">
      {searchpr? searchpr.map((e,index)=>{
                  return (
                   
                    <div className="searchdata">
                  <div className="dataShow">
                    <div className="serachImage">
                      <img src={e.imagelink} alt="" id={index}/>
                    </div>
                    <div className="searchDescrip">
                      <p id={index}>{e.desPr.substring(0, 40) + "..."}</p>
                    </div>
                  </div>
                </div>
                
                  )
                })
              :"bdh"
      }   
      </div>
            </div> </Link>
            :"" :""}
              </div>
         
           
            <div className="nav-item f-g1" id="nav_in_2">
              <div className="nav-inner nav-inner-right N21">
              <i className="ia_rightfirst">
             <FavoriteBorderOutlinedIcon/>
             </i>
                <Link to="" className="nav-link">
                  <div className="f-small">Reorder</div>
                  <div>My Items</div>
                </Link>
              </div>
            </div>
            <div className="nav-item S_none f-g1">
              <div className="nav-inner nav-inner-right NI2">
                <Link to="" className="nav-link">
                  <div className="f-small">Sign In</div>
                  <div>Account</div>
                </Link>
              </div>
            </div>
            <div className="nav-item f-g1">
              <div className="nav-inner nav-inner-right N3">
                <Link to="carts" className="nav-link">
                <Badge color="secondary" badgeContent={cartValue >= 1 ?cartValue:"NaN"}>
          <ShoppingCartIcon />
        </Badge>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      
      </div>
      
     
      <Outlet/>


    </>
  );
}
