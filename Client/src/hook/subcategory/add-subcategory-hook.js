import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import notify from "../useNotification";
import { createSubCategory } from "../../Redux/action/subCategoryAction";

const AddSubcategoryHook = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    if (!navigator.onLine) {
      notify("هناك مشكلة في الانترنت", "warn");
      return;
    }
  }, []);

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  // if (category) console.log(category.data);

  // get last subcategory state from redux
  const subcategory = useSelector((state) => state.subcategory.subcategory);

  // on Change dropdown menu
  const handleChange = (e) => {
    // console.log(e.target.value);
    setId(e.target.value);
  };

  //   to save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // on save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكلة في الانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختار تصنيف رئيسي", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createSubCategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };

  // make name and id empty after loading and handle error
  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      // if (subcategory) {
      //   console.log(subcategory);
      // }
      if (subcategory.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else if (
        subcategory === "Error Error: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "warn");
      }
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onChangeName,
  ];
};

export default AddSubcategoryHook;
