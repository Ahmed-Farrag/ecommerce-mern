import React from "react";
import { Row, Col, ToastContainer } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../Assets/avatar.png";
import add from "../../Assets/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import AddProductsHook from "../../hook/products/add-products-hook";

const AdminAddProducts = () => {
  const [
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
  ] = AddProductsHook();
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
            // allowCrop={false}
            max={4}
            cropConfig={{ crop, ruleOfThirds: true }}
          />
          <input
            value={productName}
            // onChange={(e) => setProductName(e.target.value)}
            onChange={onChangeProductName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={productDescription}
            // onChange={(e) => setProductDescription(e.target.value)}
            onChange={onChangeProductDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={priceBefore}
            //{onChange={(e) => setPriceBefore(e.target.value)}}
            onChange={onChangePriceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAfter}
            //{onChange={(e) => setPriceAfter(e.target.value)}}
            onChange={onChangePriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
          />
          <input
            value={quantity}
            // {onChange={(e) => setQuantity(e.target.value)}}
            onChange={onChangeQuantity}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
          />

          <select
            name="category"
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
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
            <option value="0">اختر ماركة</option>
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
              // onClick={() => setShowColor(!showColor)}
              onClick={onChangeColor}
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
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
