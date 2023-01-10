import { React , useState} from "react";
import { UseFullPageHook } from "./FContext";
import "./FullPage.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

import ElectricCarOutlinedIcon from "@mui/icons-material/ElectricCarOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
export default function FullProduct() {
  const { singal } = UseFullPageHook();
const [first, setfirst] = useState(null)
const [second, setSecond] = useState(true)  

    function click1(params) {
      const sideImage1 =  singal[0].sideimage1
      setSecond(false)
      setfirst(sideImage1)
    }
    function unclick(params) {
      setSecond(true)
    }
    function click2(params) {
      const sideImage1 =  singal[0].sideimage2
      setSecond(false)
      setfirst(sideImage1)
    }
  return (
    <>
      <div className="fullpage_product heroBox">
        {singal
          ? singal.map((e) => {
              return (
                <PageInner
                  mainimages={e.fullimage}
                  fpDescription={e.desPr}
                  fpPrice={e.pricepr}
                  sideimage1={e.sideimage1}
                  sideimage2={e.sideimage2}
                  click1={click1}
                  mainimagesec={first}
                  trues={second}
                  unclick={unclick}
                  click2={click2}
                />
              );
            })
          : "Data Not Fetch Please Goo on home Page"}
      </div>
    </>
  );
}

function PageInner(props) {
  // Material Ui Code
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="flex-start"
    >
     <Grid item xs={2} style={{marginTop:"2rem"}}>
     <button onMouseEnter={props.click1} onMouseLeave={props.unclick}>
        <Item className="side_image">
          <img src={props.sideimage1} alt="here is side img" />
        </Item>
        </button>
        <button onMouseEnter={props.click2} onMouseLeave={props.unclick}>
        <Item className="side_image">
          <img src={props.sideimage2} alt="here is side img" />
        </Item>
        </button>

      </Grid>
      <Grid item xs={6} className="left_Mini_Products">
        <Item>
          <img src={props.trues ? props.mainimages: props.mainimagesec} alt="here is side img" />
        </Item>
      </Grid>
      <Grid item xs={4} style={{ width: "400px" }}>
        <Item >
          <div className="fp_full_product">
            <p>{props.fpDescription}</p>
            <h6>Now {props.fpPrice}</h6>
            <div className="rating">
              <Rating
                name="read-only"
                value="4"
                style={{ color: "black", fontSize: "0.9rem" }}
                readOnly
              />{" "}
              <span> (4.3) Reviews</span>
            </div>
            <div className="button_fullpage">
              <div className="pr_button_align dp_flex_allcenter">
                <button>Add to cart</button>
              </div>
            </div>
            <div className="br_for_Pr">
              <hr className="hr_pr" />
            </div>
            <div className="productdeatils">
              <div className="shipping same_icon">
                <ElectricCarOutlinedIcon className="marg_in" />{" "}
                <span>
                  {" "}
                  Free pickup, tomorrow at{" "}
                  <a href="/">Sacramento Supercenter</a>
                </span>
              </div>
              <div className="location same_icon">
                <LocationOnOutlinedIcon className="marg_in" />{" "}
                <span> Aisle H3</span>
              </div>
              <div className="cart same_icon">
                <ShoppingCartOutlinedIcon className="marg_in" />{" "}
                <span>
                  {" "}
                  Delivery from <a href="/">storeCheck eligibility</a>
                </span>
              </div>

              <div className="truck same_icon">
                <LocalShippingOutlinedIcon className="marg_in" />{" "}
                <span>
                  {" "}
                  Sold and shipped by <a href="/">Walmart.com</a>
                </span>
              </div>
            </div>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}
