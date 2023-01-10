/* eslint-disable eqeqeq */

const ReducerProduct = (state, action) => {
  if (action.type == "AllProdcts") {
    return {
      ...state,
      allProducts: action.payload,
    };
  }

  if (action.type == "Add_to_Cart") {
    

    return {
      ...state,
      getValue: action.payload,
    };
  }
if(action.type== "cart_to_out"){
    return  {
        ...state,
        getValue:action.payload
    }
}
  if (action.type == "Add_Product_In_Cart") {
    const addfinalpr = action.payload.filter((e) => {
      return e.id == action.addcartid;
    });
    const somees = addfinalpr.map((e) => {
      return { image: e.imagelink, price: e.pricepr, cartText: e.desPr, id:e.id };
    });

    console.log(somees);
    return {
      ...state,
      addtocart: [...state.addtocart, somees],
    };
  }

  if(action.type == "Add_Product_out_Cart" ){

    
    const exit = state.addtocart.filter((e)=>{
        return e[0].id != action.addcartid
    })

    console.log(exit)
  
    return{
      ...state,
      addtocart:exit
    }
  }
};

export default ReducerProduct;
