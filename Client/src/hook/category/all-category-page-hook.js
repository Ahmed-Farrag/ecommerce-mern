import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/action/categoryAction";
import { useEffect } from "react";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  // when first load
  useEffect(() => {
    dispatch(getAllCategory(3));
  }, []);

  //to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  // console.log(category.paginationResult);

  // to get page count
  let pageCount = 0;
  if (category.PaginationResult)
    pageCount = category.paginationResult.numberOfPages;

  // when press pagination
  const getPage = (page) => {
    console.log(page);
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
