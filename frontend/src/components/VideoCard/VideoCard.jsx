import React from "react";
import { MediaVideo } from "@components";
import "./VideoCard.scss";
import { ArrowIcon, PlusIcon } from "@assets/iconsCard";
import heartIcon from "@assets/heartIcon.svg";

export const VideoCard = () => {
  return (
    <div className="videoCard__container">
      <MediaVideo />
      <div className="videoCard__logo">
        <ArrowIcon />
        <PlusIcon />
        <img src={heartIcon} alt="favori" />
      </div>
      <div className="videoCard__info">Info</div>
      <div className="videoCard__about">About</div>
    </div>
  );
};
