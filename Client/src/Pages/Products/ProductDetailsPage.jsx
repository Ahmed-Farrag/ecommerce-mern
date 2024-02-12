import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDeatils from "../../Components/Products/ProductDeatils";
import { Container } from "react-bootstrap";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />

      <Container>
        <ProductDeatils id={id} />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
