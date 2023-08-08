import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";

import { getAllCategory } from "../../Redux/action/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const AllCategoryPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory(3));
    }, []);
  
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    console.log(loading);
    
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
