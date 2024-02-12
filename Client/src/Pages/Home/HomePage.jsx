import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory title="التصنيفات" btntitle="المزيد" />
      <CardProductsContainer
        product={items}
        title="الاكثر مبيعا "
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        product={items}
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="كل المركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
