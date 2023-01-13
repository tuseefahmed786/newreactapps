/* eslint-disable eqeqeq */
function FullReducer(state, action) {
  if (action.type == "SingalProduct") {

    // below function will filter Singal product from allproduct when will User click
    const singa = action.payload.filter((e) => {
      return e.id == action.singalProduct;
    });
console.log(singa)
    // below function end filter

    return {
      ...state,
      singal: singa,
    }
  }

  if(action.type == "Despression"){
    console.log(action.payload)
  }

  if(action.type == "Search_product"){
    const searchvalues = action.allproductForSearch.filter((e)=>{
      return (action.searchContent.length >= 1 ? e.desPr.match(action.searchContent): null)
    })
      return {
        searchpr:searchvalues
      }
  }
}

export default FullReducer;
