import React from "react";
import "./UserCart.scss";
import { useNavigate } from "react-router-dom";
import { CartIcon, DeleteIcon } from "@assets/svgIcon";
import { usePurchaseContext } from "@context/PurchaseContext";
import { useCartContext } from "../../context";

export const UserCart = () => {
  const { cart, setCart } = useCartContext();
  const { purchase, setPurchase } = usePurchaseContext();
  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.articleId}`);
  };

  const deleteStorage = (articleId) => {
    const newData = cart.filter((id) => id.articleId !== articleId);
    setCart([...newData]);
  };

  const handlePurchase = (article) => {
    setPurchase([
      ...purchase,
      {
        purchaseTitle: article.articleTitle,
        purchaseImage: article.articleImage,
        purchaseId: article.articleId,
      },
    ]);
    deleteStorage(article.articleId);
  };

  return (
    <div className="cart">
      {cart.map((article) => (
        <div key={article.articleId} className="item">
          <p
            key={article.articleId}
            onClick={() => handleClick(article)}
            aria-hidden="true"
          >
            <span>●</span> {article.articleTitle}
          </p>
          <div className="icons">
            <CartIcon
              width="48px"
              height="48px"
              onClick={() => handlePurchase(article)}
            />
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
