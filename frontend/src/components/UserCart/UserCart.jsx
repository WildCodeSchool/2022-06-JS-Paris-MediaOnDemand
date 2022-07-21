import React, { useState } from "react";
import "./UserCart.scss";
import { useNavigate } from "react-router-dom";
import { CartIcon, DeleteIcon } from "@assets/svgIcon";
import { FormStripe } from "@components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { usePurchaseContext } from "@context/PurchaseContext";
import { useCartContext } from "@context";

export const UserCart = () => {
  const { cart, setCart } = useCartContext();
  const { purchase, setPurchase } = usePurchaseContext();
  const [isPay, setIsPay] = useState(false);
  const [stripeArticle, setStripeArticle] = useState();
  const navigate = useNavigate();

  const STRIPE_PUBLIC = import.meta.env.VITE_STRIPE_PUBLIC;
  const stripePromise = loadStripe(STRIPE_PUBLIC);

  const handleClick = (article) => {
    navigate(`../${article.path}/${article.articleId}`);
  };

  const deleteStorage = (articleId) => {
    const newData = cart.filter((id) => id.articleId !== articleId);
    setCart([...newData]);
  };

  const handleStripePay = (article) => {
    setStripeArticle(article);
    setIsPay(true);
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
    setIsPay(false);
  };

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
              onClick={() => handleStripePay(article)}
            />
            <DeleteIcon
              onClick={() => {
                deleteStorage(article.articleId);
              }}
            />
          </div>
        </div>
      ))}
      {isPay && (
        <Elements stripe={stripePromise}>
          <FormStripe
            handlePurchase={handlePurchase}
            stripeArticle={stripeArticle}
            setIsPay={setIsPay}
          />
        </Elements>
      )}
    </div>
  );
};
