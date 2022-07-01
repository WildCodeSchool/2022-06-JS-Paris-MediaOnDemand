import React from "react";
import { MediaVideo } from "@components";
import "./VideoCard.scss";
import { ArrowIcon, PlusIcon } from "@assets/iconsCard";
import heartIcon from "@assets/heartIcon.svg";

export const VideoCard = () => {
  return (
    <div className="videoCard-container">
      <MediaVideo />
      <div className="videoCard-logo">
        <ArrowIcon />
        <PlusIcon />
        <img src={heartIcon} alt="favori" />
      </div>
      <div className="videoCard-info">Info</div>
      <div className="videoCard-about">About</div>
    </div>
  );
};
