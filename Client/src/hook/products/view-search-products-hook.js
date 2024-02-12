import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action/productsAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const allproducts = useSelector((state) => state.allProudacts.allProducts);
  //   if (allproducts.data) console.log(allproducts.data);
  let items = [];
  if (allproducts.data) {
    items = allproducts.data;
  } else {
    items = [];
  }
  return [items];
};

export default ViewSearchProductsHook;
