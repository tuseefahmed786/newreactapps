import { createContext, useContext, useReducer, useEffect } from "react";
import P1 from "../InnerAssets/p1.webp";
import P2 from "../InnerAssets/p2.webp";
import P3 from "../InnerAssets/p3.webp";
import P4 from "../InnerAssets/p4.webp";
import P5 from "../InnerAssets/p5.webp";
import FP1 from "../InnerAssets/FullPIc/pic1.jpeg";
import FP2 from "../InnerAssets/FullPIc/pic2.jpeg";
import FP4 from "../InnerAssets/FullPIc/pic4.jpeg";
import F2P1 from '../InnerAssets/FullPIc/pr2pic1.png'
import F2P2 from "../InnerAssets/FullPIc/pic3.jpeg";
import F2P3 from "../InnerAssets/FullPIc/side image.jpeg";
import F9 from '../InnerAssets/FullPIc/p2p3.jpg'
import F10 from '../InnerAssets/FullPIc/p2p4.jpeg'
import F11 from '../InnerAssets/FullPIc/p3p4.jpeg'
import F12 from '../InnerAssets/FullPIc/p4p1.jpeg'
import F13 from '../InnerAssets/FullPIc/p4p2.jpeg'
import F14 from '../InnerAssets/FullPIc/p5p1.jpg'
import F15 from '../InnerAssets/FullPIc/p5p2.jpg'
import F16 from '../InnerAssets/FullPIc/p6p1.jpg'
import F17 from '../InnerAssets/FullPIc/p6p2.jpg'
import FullReducer from "./FullReducer";
const FullPage = createContext();

function FullProductContext({ children }) {
  const orginalValue = {
    singal: [],
  };
  const [state, dispatch] = useReducer(FullReducer, orginalValue);

  const singalProduct = (GetsingalProduct) => {
   
    const allProduct = prdata.map((looppr, index) => {
      return looppr;
    });

    dispatch({
      type: "SingalProduct",
      singalProduct: GetsingalProduct,
      payload: allProduct,
    });
  };
  const dispatchFUn = (allProducts) => {
    dispatch({ type: "AllProdcts", payload: allProducts });
  };
  useEffect(() => {
    const allProduct = prdata.map((looppr, index) => {
      return looppr;
    });

    dispatchFUn(allProduct);
  }, []);
  return (
    <>
      <FullPage.Provider value={{ ...state, singalProduct, dispatch }}>
        {children}
      </FullPage.Provider>
    </>
  );
}

const UseFullPageHook = () => {
  return useContext(FullPage);
};

export { UseFullPageHook, FullProductContext };
const prdata = [
  {
    id: 0,
    imagelink: P1,
    fullimage: FP1,
    sideimage1:F2P2,
    sideimage2:F2P3,
    btncategiory: "Option",
    pricepr: "$78",
    desPr:
      "PocketTunes Bone Conduction Instant Mini Speakers with Bluetooth Wireless Technology, Pack of 2 (Sierra Blue)",
    shipping: "3+ Days Shipping",
  },
  {
    id: 1,
    imagelink: P2,
    fullimage: FP2,
    sideimage1:F12,
    sideimage2:F13,
    btncategiory: "Option",
    pricepr: "$56.6",
    desPr: "Time And Tru Women's Crewneck Tee with Long Sleeves",
    shipping: "4+ Days Shipping",
  },
  {
    id: 2,
    imagelink: P3,
    fullimage: F2P1,
    sideimage1:F14,
    sideimage2:F15,
    btncategiory: "Option",
    pricepr: "$89.6",
    desPr:
      "Keurig K-Duo Essentials Single Serve & Carafe Coffee Maker, Moonlight Gray",
    shipping: "1+ Days Shipping",
  },
  {
    id: 3,
    imagelink: P4,
    btncategiory: "Adds",
    fullimage: F9,
    sideimage1:F10,
    sideimage2:F11,
    pricepr: "$34.9",
    desPr: "Time And Tru Women's Crewneck Tee with Long Sleeves",
    shipping: "4+ Days Shipping",
  },
  {
    id: 4,
    imagelink: P5,
    fullimage: FP4,
    sideimage1:F16,
    sideimage2:F17,
    btncategiory: "Option",
    pricepr: "$46.21",
    desPr: "Windows 10 Home Laptop Computer, XOPPOX 2022 Newest 13.5 UHD 3000 x 2000 Clear Screen PC Laptops with Intel Celeron N4020 Dual Core 8GB RAM 128GB SSD for Students School Office, Gray",
    shipping: "7+ Days Shipping",
  },
];
