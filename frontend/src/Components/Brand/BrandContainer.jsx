import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/brand1.png";
import brand2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";

const BrandContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل المركات</div>
      <Row className="d-flex justify-content-between my-1">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
      </Row>
    </Container>
  );
};

export default BrandContainer;
