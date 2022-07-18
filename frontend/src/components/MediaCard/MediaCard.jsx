import React from "react";
import "../../theme.scss";
import "./MediaCard.scss";
import "@components/Button/Button.scss";
import { PlusIcon, HeartIcon } from "@assets/iconsCard";
import { Button } from "@components";
import { useNavigate } from "react-router-dom";
import { useFavoriteContext, useCartContext } from "@context/";

export const MediaCard = ({
  count,
  total,
  title,
  image,
  mediaCat,
  mediaId,
}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCartContext();
  const { favorites, setFavorites } = useFavoriteContext();

  const handleClick = () => {
    navigate(`../${mediaCat}/${mediaId}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    let isArticle = false;
    cart.map((item) => {
      if (item.articleId === mediaId) {
        isArticle = true;
      }
      return isArticle;
    });
    if (!isArticle) {
      setCart([
        ...cart,
        {
          articleTitle: title,
          articleId: mediaId,
          path: mediaCat,
          articleImage: image,
        },
      ]);
    }
  };

  const addStorage = () => {
    let isFavorite = false;
    favorites.map((item) => {
      if (item.favId === mediaId) {
        isFavorite = true;
      }
      return isFavorite;
    });
    if (!isFavorite) {
      setFavorites([
        ...favorites,
        { favId: mediaId, favTitle: title, path: mediaCat, favImage: image },
      ]);
    }
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
          <HeartIcon width="32px" height="32px" onClick={() => addStorage()} />
        </div>
        <PlusIcon
          width="32px"
          height="32px"
          onClick={(e) => handleAddToCart(e)}
        />
      </div>
      <h3 className="mediaCard__title">{title}</h3>
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
