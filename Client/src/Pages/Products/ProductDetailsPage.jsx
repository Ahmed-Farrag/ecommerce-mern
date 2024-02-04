import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDeatils from "../../Components/Products/ProductDeatils";
import { Container } from "react-bootstrap";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />

      <Container>
        <ProductDeatils />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
