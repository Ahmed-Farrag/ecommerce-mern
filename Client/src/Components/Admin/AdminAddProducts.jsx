import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../Assets/avatar.png";
import add from "../../Assets/add.png";
import MultiImageInput from "react-multiple-image-input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { getAllBrand } from "../../Redux/action/brandAction";
import { CompactPicker } from "react-color";
import { getOneCategory } from "../../Redux/action/subCategoryAction";

const AdminAddProducts = () => {
  // when work in first time dispatch on getallcategory
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);
  // to arrive data
  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  if (category) console.log(category.data);
  // get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last subCategory state from redux
  const subCategory = useSelector((state) => state.subcategory.subcategory);

  const onSelect = () => {};
  const onRemove = () => {};

  // value images products
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
    height: "200",
  };
  const [images, setImages] = useState([]);

  const [options, setOptions] = useState([]);
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
  // to show hide clor picker
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
  console.log(brandId);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
            cropConfig={{ crop, ruleOfThirds: true }}
          />
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
          />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
          />
          <select
            onChange={onSelectCategory}
            name="category"
            id="category"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onChange={onSelectBrand}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">اختر ماركة</option>
            {brand.data
              ? brand.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              onClick={() => setShowColor(!showColor)}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChange={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
