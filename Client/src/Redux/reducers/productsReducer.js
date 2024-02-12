import {
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
} from "../type";

// initial value
const inital = {
  products: [],
  allProducts: [],
  productDetails: [],
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
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
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
