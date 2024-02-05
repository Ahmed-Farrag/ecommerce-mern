import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../Redux/action/brandAction";

const HomeBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  //   console.log(brand);
  //   console.log(loading);

  return [brand, loading];
};

export default HomeBrandHook;
