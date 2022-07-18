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

  const handlePurchase = (article) => {
    let isArticle = false;
    purchase.map((item) => {
      if (item.purchaseId === article.articleId) {
        isArticle = true;
      }
      return isArticle;
    });
    if (!isArticle) {
      setPurchase([
        ...purchase,
        {
          purchaseTitle: article.articleTitle,
          purchaseImage: article.articleImage,
          purchaseId: article.articleId,
        },
      ]);
    }
  };

  const deleteStorage = (articleId) => {
    const newData = cart.filter((id) => id.articleId !== articleId);
    setCart([...newData]);
  };

  return (
    <div>
      {cart.map((article) => (
        <div key={article.articleId} className="item">
          <li
            key={article.articleId}
            onClick={() => handleClick(article)}
            aria-hidden="true"
          >
            {article.articleTitle}
          </li>
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
