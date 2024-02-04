import React from "react";
import SubTitle from "../Utility/SubTitle";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brad1 from "../../Assets/brand1.png";
import brad2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";

const BrandFeatured = ({ title, btntitle }) => {
  return (
    <Container>
      {/**puss title and btn as a props to make it dynamic */}
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="d-flex justify-content-between my-1">
        <BrandCard img={brad1} />
        <BrandCard img={brad2} />
        <BrandCard img={brand3} />
        <BrandCard img={brad1} />
        <BrandCard img={brand3} />
        <BrandCard img={brad2} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
