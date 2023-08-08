import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import avatar from "../../Assets/avatar.png";

import { createCategory } from "../../Redux/action/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const AdminAddCategory = () => {

  const dispatch = useDispatch();


  const [img, setImg] = useState(avatar)
  const [name, setName] = useState('')

  // when image change save it
  const onImageChange = (event)=>{
    if(event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]))
}
  }
// save data in DB
  const handleSubmit = (event)=>{
    event.preventDefault()

  }

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>

         <div>
         <label for="upload-photo">
         <img src={img} alt="fzx" height="100px" width="120px" style={{cursor: "pointer"}} />
         </label>
         <input type="file" name="photo" onChange={onImageChange} id="upload-photo"/>
         </div>

          <input
          onChange={(e)=> setName(e.target.value)}
          value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategory;
