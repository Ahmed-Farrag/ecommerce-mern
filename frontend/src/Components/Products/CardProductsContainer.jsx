import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <Container>
      {/**puss title and btn as a props to make it dynamic */}
      <SubTitle title={title} btntitle={btntitle} />
      <Row className="d-flex justify-content-between my-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
