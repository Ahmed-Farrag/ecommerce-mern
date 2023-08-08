import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";

import { getAllCategory, getAllCategoryPage } from "../../Redux/action/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const AllCategoryPage = () => {

    const dispatch = useDispatch();
    // when first load
    useEffect(() => {
      dispatch(getAllCategory(10));
    }, []);
  
    //to get state from redux
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);

    // to get page count
    let pageCount = 0
    if(category.PaginationResult)
       pageCount=category.paginationResult.numberOfPages

       // when press pagination
      const getPage = (page)=>{
        dispatch(getAllCategoryPage(page));
      }
    
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
    }
    </div>
  );
};

export default AllCategoryPage;
