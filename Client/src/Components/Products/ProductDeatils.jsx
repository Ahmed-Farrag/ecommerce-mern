import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDeatils = ({ id }) => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery id={id} />
        </Col>
        <Col lg="8">
          <ProductText id={id} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDeatils;
