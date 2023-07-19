import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory title="الاكثر مبيعا" btntitle="المزيد" />
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title="احدث الازياء" btntitle="المزيد" />
      <BrandFeatured />
    </div>
  );
};

export default HomePage;
