import React, { useState } from "react";
import "./UserCart.scss";
import notFoundImg from "@assets/media_non_trouve.svg";
import { useNavigate } from "react-router-dom";
import { CartIcon, DeleteIcon } from "@assets/svgIcon";
import { usePurchaseContext } from "@context/PurchaseContext";
// import { CleanArray } from "@tools/CleanArray";
import { useCartContext } from "../../context";

export const UserCart = () => {
  const { cart, setCart } = useCartContext();
  const { purchase, setPurchase } = usePurchaseContext();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.articleId}`);
  };

  const deleteStorage = (articleId) => {
    const newData = cart.filter((id) => id.articleId !== articleId);
    setCart([...newData]);
  };

  const cleanArray = (newPurchase) => {
    // console.log("clean", newPurchase.length);
    if (windowWidth >= 1440) {
      if (newPurchase.length === 0) {
        setPurchase([
          { newPurchaseImage: notFoundImg, notFound: true, id: "null1" },
          { newPurchaseImage: notFoundImg, notFound: true, id: "null2" },
          { newPurchaseImage: notFoundImg, notFound: true, id: "null3" },
        ]);
      } else if (newPurchase.length === 1) {
        setPurchase([
          ...newPurchase,
          { newPurchaseImage: notFoundImg, notFound: true, id: "null2" },
          { newPurchaseImage: notFoundImg, notFound: true, id: "null3" },
        ]);
      } else if (newPurchase.length === 2) {
        setPurchase([
          ...newPurchase,
          {
            newPurchaseImage: notFoundImg,
            notFound: true,
            id: "null3",
          },
        ]);
      }
    } else if (windowWidth >= 768) {
      if (newPurchase.length === 0) {
        setPurchase([
          ...newPurchase,
          { newPurchaseImage: notFoundImg, notFound: true, id: "null2" },
          { newPurchaseImage: notFoundImg, notFound: true, id: "null3" },
        ]);
      } else if (newPurchase.length === 1) {
        setPurchase([
          ...newPurchase,
          {
            newPurchaseImage: notFoundImg,
            notFound: true,
            id: "null3",
          },
        ]);
      }
    } else if (windowWidth < 768) {
      if (purchase.length === 0) {
        setPurchase([
          ...purchase,
          {
            purchaseImage: notFoundImg,
            notFound: true,
            id: "null3",
          },
        ]);
      }
    }
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
    const newPurchase = purchase;
    cleanArray(newPurchase);
    deleteStorage(article.articleId);
  };

  // console.log("2", purchase);

  return (
    <div className="cart">
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
