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
import { UseShortContext } from "../Context/ProductContext";


export default function Navbar() {
  const [navcheck, setnavcheck] = useState(false);
  const { getValue } = UseShortContext();
  console.log(getValue);

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
            <Link className="navbar-brand " to="/">
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
                <Link to="/" className="nav-link">Services</Link>
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
                <Link to="/" className="nav-link">
                  <div className="f-small">Reorder</div>
                  <div>My Items</div>
                </Link>
              </div>
            </div>
            <div className="nav-item S_none f-g1">
              <div className="nav-inner nav-inner-right NI2">
                <Link to="/" className="nav-link">
                  <div className="f-small">Sign In</div>
                  <div>Account</div>
                </Link>
              </div>
            </div>
            <div className="nav-item f-g1">
              <div className="nav-inner nav-inner-right N3">
                <Link to="/carts" className="nav-link">
                <Badge color="secondary" badgeContent={getValue}>
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
