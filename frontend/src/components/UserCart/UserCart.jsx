import React from "react";
import "./UserCart.scss";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context";

export const UserCart = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.articleId}`);
  };

  return (
    <div>
      {cart.map((article) => (
        <li>
          <button
            key={article.articleId}
            type="button"
            onClick={() => handleClick(article)}
          >
            {article.articleTitle}
          </button>
        </li>
      ))}
    </div>
  );
};
