

import { createContext, useContext, useReducer } from "react";
import ReducerProduct from "../Reducer/ProductReducer";
const ProductContext = createContext();

const ProductSend = ({ children }) => {
  const orivalue = {
    allProducts: [],
    getValue : "",
    addtocart:[],
  };
 
  const [state, dispatch] = useReducer(ReducerProduct, orivalue);
  
  return (
    <>
      <ProductContext.Provider value={{ ...state, dispatch}}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

const UseShortContext = () => {
  return useContext(ProductContext);
};
export { ProductSend, UseShortContext };

