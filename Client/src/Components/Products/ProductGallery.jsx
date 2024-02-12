import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/products/view-products-details-hook";

const ProductGallery = () => {
  const { id } = useParams();
  // integrate functions to this component & pass id as a function
  const [items, images] = ViewProductsDetailsHook(id);
  console.log(items.images);

  console.log(id);

  // const images = [
  //   {
  //     original: `${mobile}`,
  //   },
  //   {
  //     original: `${mobile}`,
  //   },
  //   {
  //     original: `${mobile}`,
  //   },
  // ];
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        // defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
      />
    </div>
  );
};

export default ProductGallery;
