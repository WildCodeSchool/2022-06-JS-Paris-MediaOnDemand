import React from "react";
import "../../theme.scss";
import "./UserPurchase.scss";
import "@components/Button/Button.scss";
import { DownloadIcon } from "@assets/svgIcon";

export const UserPurchase = ({ title, image }) => {
  // const handleClick = () => {};

  return (
    <div className="purchaseCard">
      <img src={image} className="purchaseCard__image" alt="" />
      <h3 className="purchaseCard__title">{title}</h3>
      <DownloadIcon />
    </div>
  );
};
