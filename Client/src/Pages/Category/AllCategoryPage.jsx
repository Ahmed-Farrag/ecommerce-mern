import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";

const AllCategoryPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
  
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    console.log(loading);
    
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
