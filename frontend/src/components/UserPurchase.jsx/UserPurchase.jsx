import React from "react";
import "../../theme.scss";
import "./PurchaseCard.scss";
import "@components/Button/Button.scss";
import { Button } from "@components";

export const UserPurchase = ({ count, total, title, image }) => {
  const handleClick = () => {};

  return (
    <div className="purchaseCard">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="purchaseCard__image"
      >
        <div className="purchaseCard__counter">
          <span>{`${count}/${total}`}</span>
        </div>
      </div>
      <h3 className="purchaseCard__title">{title}</h3>
      <Button
        buttonSize="small"
        buttonStyle="dark"
        onClick={() => handleClick()}
      >
        Infos
      </Button>
    </div>
  );
};
