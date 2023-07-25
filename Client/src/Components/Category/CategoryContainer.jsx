import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import labtop from "../../Assets/labtop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";

const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل التصنيفات</div>
      <Row className="d-flex justify-content-between my-2">
        <CategoryCard title="اجهزة مدرسية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة مدرسية" img={sale} background="#FF6262" />
        <CategoryCard title="اجهزة مدرسية" img={pic} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة مدرسية" img={sale} background="#FF6262" />
        <CategoryCard title="اجهزة مدرسية" img={pic} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة مدرسية" img={cat2} background="#F4DBA4" />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
