import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDeatils from "../../Components/Products/ProductDeatils";
import { Container } from "react-bootstrap";
import RateContainer from "../../Components/Rate/RateContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />

      <Container>
        <ProductDeatils />
        <RateContainer />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
