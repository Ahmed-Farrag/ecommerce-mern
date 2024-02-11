import { CREATE_PRODUCTS, GET_ERROR } from "../type";

// initial value
const inital = {
  products: [],
  loading: true,
};
const productsReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
