import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = ({ title, btntitle }) => {
  const [category, loading, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allcategory" />
      <Row className="d-flex justify-content-between my-2">
        {!loading ? (
          category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
