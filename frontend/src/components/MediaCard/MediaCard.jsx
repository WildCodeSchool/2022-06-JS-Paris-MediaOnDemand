import React from "react";
import "../../theme.scss";
import "./MediaCard.scss";
import "@components/Button/Button.scss";
import { PlusIcon, HeartIcon } from "@assets/iconsCard";
import { Button } from "@components";
import { useNavigate } from "react-router-dom";

export const MediaCard = ({ count, total, title, image, mediaId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`../media-info/${mediaId}`);
  };

  return (
    <div className="mediaCard">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="mediaCard__image"
      >
        <div className="mediaCard__iconUp">
          <div className="mediaCard__counter">
            <span>{`${count}/${total}`}</span>
          </div>
          <HeartIcon width="32px" height="32px" />
        </div>
        <PlusIcon width="32px" height="32px" />
      </div>
      <h3 className="mediaCard__title">{title}</h3>
      {/* <Link to="/"> */}
      <Button
        buttonSize="small"
        buttonStyle="dark"
        onClick={() => handleClick()}
      >
        infos
      </Button>
      {/* </Link> */}
    </div>
  );
};
