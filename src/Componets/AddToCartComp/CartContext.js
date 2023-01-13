import { createContext, useContext ,useReducer} from "react";
import CartReducer from "./CartReducer";
const Cartprovide = createContext()

function CartContext({children}) {
const value ={
    addtocar: [],
    quantity:[],
   
}
    const [state, dispatch] = useReducer(CartReducer, value)
 function addd(i,z){
   dispatch({
    type:"addtocart",
    payload:i,
    payof:z
   })
}  return (
   <Cartprovide.Provider value={{state, addd}}>
{children}
   </Cartprovide.Provider>
  )
}
  
 function UseCart() {
    return useContext(Cartprovide)
  }
  
export { CartContext , UseCart}