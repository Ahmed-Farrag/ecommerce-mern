import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const allproducts = useSelector((state) => state.allProudacts.allProducts);
  //   if (allproducts.data) console.log(allproducts.data);

  // if back empty handle it & slice it to return first 4 items
  let items = [];
  if (allproducts.data) {
    items = allproducts.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items];
};

export default ViewHomeProductsHook;
