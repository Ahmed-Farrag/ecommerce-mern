import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/action/productsAction";
import mobile from "../../Assets/mobile.png";

const ViewProductsDetailsHook = (id) => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getOneProduct(id));
  }, []);

  const productDetails = useSelector(
    (state) => state.allProudacts.productDetails
  );

  // if back empty handle it
  let items = [];
  if (productDetails.data) {
    items = productDetails.data;
  } else {
    items = [];
  }

  // map on images
  let images = [];
  if (items.images) {
    images = items.images.map((img) => {
      return {
        original: img,
      };
    });
  } else {
    images = [{ original: `${mobile}` }];
  }
  return [items, images];
};

export default ViewProductsDetailsHook;
