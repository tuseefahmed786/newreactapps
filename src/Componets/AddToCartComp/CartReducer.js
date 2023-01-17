
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
// console.log(vvvn)(arr1.flat()
const merge = [...state.addtocar,action.payload]

const nstdArayRemove = merge.flat()

const dublicate = [...new Set(nstdArayRemove)]


return{
    ...state,
    addtocar:dublicate,
    quantity:action.payof
}
    }
  
}
