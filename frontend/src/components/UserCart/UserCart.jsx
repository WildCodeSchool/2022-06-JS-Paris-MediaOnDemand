import React from "react";
import "./UserCart.scss";
import { useNavigate } from "react-router-dom";
import { CartIcon, DeleteIcon } from "@assets/svgIcon";
import { useCartContext } from "../../context";

export const UserCart = () => {
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.articleId}`);
  };

  const deleteStorage = (articleId) => {
    const newData = cart.filter((id) => id.articleId !== articleId);
    setCart([...newData]);
  };

  return (
    <div>
      {cart.map((article) => (
        <div className="item">
          <li
            key={article.articleId}
            onClick={() => handleClick(article)}
            aria-hidden="true"
          >
            {article.articleTitle}
          </li>
          <div className="icons">
            <CartIcon width="48px" height="48px" />
            <DeleteIcon
              onClick={() => {
                deleteStorage(article.articleId);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
