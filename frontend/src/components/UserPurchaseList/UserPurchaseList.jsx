import React from "react";
import { UserPurchase } from "@components/";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./UserPurchaseList.scss";
import { usePurchaseContext } from "@context/PurchaseContext";

export const UserPurchaseList = () => {
  const { purchase } = usePurchaseContext();

  return (
    <Carousel
      showArrows
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={0}
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
