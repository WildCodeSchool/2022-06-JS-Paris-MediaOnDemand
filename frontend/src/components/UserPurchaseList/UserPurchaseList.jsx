/* eslint-disable no-unused-vars */
import React from "react";
import { UserPurchase } from "@components/";
import AliceCarousel from "react-alice-carousel";
import "./UserPurchaseList.scss";

export const UserPurchaseList = ({ purchase }) => {
  const responsive = {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1439: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      controlsStrategy="alternate"
      mouseTracking
      touchTracking
      disableDotsControls
      infinite
    >
      {purchase?.map((item) => (
        <UserPurchase
          key={item.purchaseId}
          title={item.purchaseTitle}
          image={item.purchaseImage}
          isNotFound={item.notFound}
        />
      ))}
    </AliceCarousel>
  );
};
