import { useEffect, useState } from "react";
import { getOneCategory } from "../../Redux/action/subCategoryAction";
import notify from "../useNotification";
import { createProduct } from "../../Redux/action/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { getAllBrand } from "../../Redux/action/brandAction";

const AddProductsHook = () => {
  // when work in first time dispatch on getallcategory
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);

  // to arrive data
  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  // if (category) console.log(category.data);

  // get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last subCategory state from redux
  const subCategory = useSelector((state) => state.subCategory.subcategory);

  // get last subCategory state from redux
  const products = useSelector((state) => state.allProudacts.products);

  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList);
  };

  // value images products
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
    height: "200",
  };

  const [options, setOptions] = useState([]);

  const [images, setImages] = useState({});

  // values state
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [quantity, setQuantity] = useState("الكمية المتاحة");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [selectedSubId, setSelectedSubId] = useState([]);
  const [loading, setLoading] = useState(true);

  // to change productName
  const onChangeProductName = (e) => {
    e.persist();
    setProductName(e.target.value);
  };
  // to change productDescription
  const onChangeProductDescription = (e) => {
    e.persist();
    setProductDescription(e.target.value);
  };
  // to change Quantity
  const onChangeQuantity = (e) => {
    e.persist();
    setQuantity(e.target.value);
  };
  // to change priceAfter
  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAfter(e.target.value);
  };
  // to change priceBefore
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };
  // to change show color
  const onChangeColor = (e) => {
    e.persist();
    setShowColor(!showColor);
  };

  // to show hide color picker
  const [showColor, setShowColor] = useState(false);
  // to store all pick color
  const [colors, setColors] = useState([]);
  // when choose new color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  // remove color
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  // when select category store id
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOneCategory(e.target.value));
    }
    setCategoryId(e.target.value);
  };
  useEffect(() => {
    if (categoryId !== 0) {
      if (subCategory.data) {
        setOptions(subCategory.data);
      }
    }
  }, [categoryId]);

  // when select brand store id
  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };
  // console.log(brandId);

  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation for inputs
    if (
      productName === "" ||
      productDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0 ||
      categoryId === 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    if (priceBefore > priceAfter) {
      notify("من فضلك تاكد من الخصم", "warn");
      return;
    }
    // convert base64 image to file
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    // convert array of base 64 image to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    // to send data to server
    const formData = new FormData();
    formData.append("title", productName);
    formData.append("description", productDescription);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", categoryId);
    formData.append("brand", brandId);
    // availableColors & itemImages & selectedSubId
    itemImages.map((item) => formData.append("images", item));
    colors.map((color) => formData.append("availableColors", color));
    selectedSubId.map((item) => formData.append("subcategory", item._id));
    console.log(
      productName,
      productDescription,
      quantity,
      priceAfter,
      images[0]
    );
    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  //  get create measage
  // const product = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (loading === false) {
      setCategoryId(0);
      setColors([]);
      setImages([]);
      setProductName("");
      setProductDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQuantity("الكمية المتاحة");
      setBrandId(0);
      setSelectedSubId([]);
      setTimeout(() => setLoading(true), 1500);

      if (products) {
        if (products.status === 201) {
          notify("تم الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);

  return [
    category,
    brand,
    subCategory,
    products,
    loading,
    images,
    colors,
    productName,
    productDescription,
    priceAfter,
    priceBefore,
    quantity,
    options,
    showColor,
    setImages,
    onSelect,
    onRemove,
    handleChangeComplete,
    handleSubmit,
    removeColor,
    onSelectBrand,
    onSelectCategory,
    crop,
    onChangeProductName,
    onChangeProductDescription,
    onChangeQuantity,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeColor,
  ];
};

export default AddProductsHook;
