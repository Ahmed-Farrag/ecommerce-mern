import { CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";

//create products with pagination
export const createProduct = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      "/api/v1/products",
      formatData
    );
    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + e,
    });
  }
};

// get products with pagination
export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/products");
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + e,
    });
  }
};
