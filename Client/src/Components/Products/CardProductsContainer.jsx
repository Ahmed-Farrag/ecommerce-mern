import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, pathText, product }) => {
  return (
    <Container>
      {/**puss title and btn as a props to make it dynamic */}
      {product ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}

      <Row className="d-flex justify-content-between my-2">
        {product
          ? product.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
