import React from "react";
import SubTitle from "../Utility/SubTitle";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brad1 from "../../Assets/brand1.png";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = HomeBrandHook();

  return (
    <Container>
      {/*{brand.data.length > 0 ? (
      <div>*/}
      {/**puss title and btn as a props to make it dynamic */}
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="d-flex justify-content-between my-1">
        {!loading ? (
          brand.data ? (
            brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard key={index} img={item.image} />;
            })
          ) : (
            <h4>لا يوجد ماركات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
      {/* </div>
            ) : null}*/}
    </Container>
  );
};

export default BrandFeatured;
