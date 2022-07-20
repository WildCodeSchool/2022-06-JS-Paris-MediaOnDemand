import React from "react";
import { UserPurchase } from "@components/";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "./UserPurchaseList.scss";
import { usePurchaseContext } from "@context/PurchaseContext";

export const UserPurchaseList = () => {
  const { purchase } = usePurchaseContext();
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1439, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item"
    >
      {purchase.map((item) => (
        <UserPurchase
          key={item.purchaseId}
          title={item.purchaseTitle}
          image={item.purchaseImage}
        />
      ))}
    </Carousel>
  );
};
