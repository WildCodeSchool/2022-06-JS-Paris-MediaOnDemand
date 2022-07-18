import "./Favorite.scss";
import { PlusIcon } from "@assets/iconsCard";
import { useNavigate } from "react-router-dom";
import { BrokenHeartIcon } from "@assets/svgIcon";
import React from "react";
import { useFavoriteContext, useCartContext } from "@context/";

export const Favorite = () => {
  const { favorites, setFavorites } = useFavoriteContext();
  const { cart, setCart } = useCartContext();

  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`../${movie.path}/${movie.favId}`);
  };

  const handleAddToCart = (movie) => {
    let isArticle = false;
    cart.map((item) => {
      if (item.articleId === movie.favId) {
        isArticle = true;
      }
      return isArticle;
    });
    if (!isArticle) {
      setCart([
        ...cart,
        {
          articleTitle: movie.favTitle,
          articleId: movie.favId,
          path: movie.mediaCat,
        },
      ]);
    }
  };

  const deleteStorage = (favId) => {
    const newData = favorites.filter((id) => id.favId !== favId);
    setFavorites([...newData]);
  };

  return (
    <div>
      {favorites.map((movie) => (
        <div className="item">
          <li
            key={movie.favId}
            onClick={() => handleClick(movie)}
            aria-hidden="true"
          >
            {movie.favTitle}
          </li>
          <div className="icons">
            <PlusIcon onClick={() => handleAddToCart(movie)} />
            <BrokenHeartIcon
              onClick={() => {
                deleteStorage(movie.favId);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
