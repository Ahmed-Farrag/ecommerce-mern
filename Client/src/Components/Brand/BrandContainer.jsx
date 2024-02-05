import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/brand1.png";

const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل المركات</div>
      <Row className="d-flex justify-content-between my-1">
        {!loading ? (
          data ? (
            data.slice(0, 5).map((item, index) => {
              return <BrandCard key={index} img={item.image} />;
            })
          ) : (
            <h4>no brand</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
