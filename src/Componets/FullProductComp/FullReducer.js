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
    };
  }
}

export default FullReducer;
