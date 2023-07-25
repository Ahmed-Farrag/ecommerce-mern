import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utility/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utility/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />

        <Row className="d-flex flx-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col xs="10" sm="10" md="11">
            <CardProductsContainer title="" btntitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
