import React from "react";
import { UserPurchase } from "@components/";
import AliceCarousel from "react-alice-carousel";
import "./UserPurchaseList.scss";
import { usePurchaseContext } from "@context/PurchaseContext";

export const UserPurchaseList = () => {
  const { purchase } = usePurchaseContext();
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
      touchMoveDefaultEvents
    >
      {purchase.map((item) => (
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
