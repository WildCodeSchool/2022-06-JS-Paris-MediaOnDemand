import React from "react";
import "../../theme.scss";
import "./MediaCard.scss";
import "@components/Button/Button.scss";
import { PlusIcon } from "@assets/iconsCard";
import { Button } from "@components";
import { Link } from "react-router-dom";
import heartIcon from "../../assets/heartIcon.svg";

export const MediaCard = (
  /* { imgUrl, title, category, current, total } */ { isMediaInfo }
) => {
  return (
    <div className="mediaCard">
      {!isMediaInfo && (
        <div className="imageMediaCard">
          <div className="iconUpMediaCard">
            <div className="counter">
              <span>*/*</span>
            </div>
            <img src={heartIcon} alt="add" />
          </div>
          <PlusIcon />
        </div>
      )}
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
