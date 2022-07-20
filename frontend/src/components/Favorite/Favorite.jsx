import React from "react";
import "./Favorite.scss";
import { PlusIcon } from "@assets/iconsCard";
import { useNavigate } from "react-router-dom";
import { BrokenHeartIcon } from "@assets/svgIcon";
import { useFavoriteContext, useCartContext } from "@context/";

export const Favorite = () => {
  const { favorites, setFavorites } = useFavoriteContext();
  const { cart, setCart } = useCartContext();

  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.favId}`);
  };

  const handleAddToCart = (article) => {
    let isArticle = false;
    cart.map((item) => {
      if (item.articleId === article.favId) {
        isArticle = true;
      }
      return isArticle;
    });
    if (!isArticle) {
      setCart([
        ...cart,
        {
          articleTitle: article.favTitle,
          articleId: article.favId,
          path: article.path,
          articleImage: article.favImage,
        },
      ]);
    }
  };

  const deleteStorage = (favId) => {
    const newData = favorites.filter((id) => id.favId !== favId);
    setFavorites([...newData]);
  };

  return (
    <div className="favorite">
      {favorites.map((article) => (
        <div key={article.favId} className="item">
          <li
            key={article.favId}
            onClick={() => handleClick(article)}
            aria-hidden="true"
          >
            {article.favTitle}
          </li>
          <div className="icons">
            <PlusIcon onClick={() => handleAddToCart(article)} />
            <BrokenHeartIcon
              onClick={() => {
                deleteStorage(article.favId);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
