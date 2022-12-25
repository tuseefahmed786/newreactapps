/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState  } from "react";
import WLogo from "../Assests/Logo/walmartLogo.svg";
import "../CssXomponets/Nav.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AppsIcon from "@mui/icons-material/Apps";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import NoneNavbar from "./InnerCompnets/NoneNavbar";
export default function Navbar() {
  const [navcheck, setnavcheck] = useState(false);

  function hover() {
    setnavcheck(true);
    const gets = document.body;
    gets.addEventListener("mousedown", () => {
      setnavcheck(false);
      
    });
  }
 

 


      

 

  return (
    <>
      <div className="header_align">
        <nav className="navbar d-flex-center">
          <div className="logo_align f-g1">
            <a className="navbar-brand " href="/">
              <img src={WLogo} alt="" />
            </a>
          </div>

          <div className="main-nav f-g2 d-flex-center">
            <div className="nav-item InNav f-g1">
              <div className="nav-inner nav-inner-left" onClick={hover}>
                <i className="icon_align">
                
                  <AppsIcon  />
                </i>
                <a className="nav-link active" aria-current="page" to="">
                  Departments
                </a>
              </div>
              {navcheck ? <NoneNavbar /> : ""}
            </div>
            <div className="nav-item f-g1" id="nav_in_2">
              <div className="nav-inner nav-inner-left">
              <i className="icon_align">
              <DragIndicatorOutlinedIcon />   
              </i> 
                <a href="/" className="nav-link">Services</a>
              </div>
            </div>
            <div className="nav-item S_none f-g9" >
              <form className="nav-item" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search everything at Walmart online and in store"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="nav-item f-g1" id="nav_in_2">
              <div className="nav-inner nav-inner-right N21">
              <i className="ia_rightfirst">
             <FavoriteBorderOutlinedIcon/>
             </i>
                <a href="/" className="nav-link">
                  <div className="f-small">Reorder</div>
                  <div>My Items</div>
                </a>
              </div>
            </div>
            <div className="nav-item S_none f-g1">
              <div className="nav-inner nav-inner-right NI2">
                <a href="/pageworking" className="nav-link">
                  <div className="f-small">Sign In</div>
                  <div>Account</div>
                </a>
              </div>
            </div>
            <div className="nav-item f-g1">
              <div className="nav-inner nav-inner-right N3">
                <a href="/" className="nav-link">
               <i className="ia_rightsecond"> <LocalMallOutlinedIcon/></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
   
    </>
  );
}
// eslint-disable-next-line no-lone-blocks
