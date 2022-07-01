import React from "react";
import "../../theme.scss";
import "./MediaCard.scss";
import "@components/Button/Button.scss";
import { PlusIcon, HeartIcon } from "@assets/iconsCard";
import { Button } from "@components";
import { Link } from "react-router-dom";

export const MediaCard = () => {
  return (
    <div className="mediaCard">
      <div className="imageMediaCard">
        <div className="iconUpMediaCard">
          <div className="counter">
            <span>0/0</span>
          </div>
          <HeartIcon />
        </div>
        <PlusIcon />
      </div>
      <div className="titleMediaCard">title</div>
      <div className="categoriesMediaCard">categories</div>
      <Link to="/">
        <Button buttonSize="small" buttonStyle="dark">
          infos
        </Button>
      </Link>
    </div>
  );
};
