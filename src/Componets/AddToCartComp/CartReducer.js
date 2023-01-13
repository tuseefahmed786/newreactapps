
export default function CartReducer(state,action) {

    if(action.type == "addtocart"){
    
// const dataCart = {
//     id,
//     desPr,
//     imagelink,
//     pricepr,
//     qunatity:action.payof
// }
// console.log(dataCart)
// console.log(vvvn)

return{
    ...state,
    addtocar:action.payload,
    quantity:action.payof
    
}
    }
  
}
