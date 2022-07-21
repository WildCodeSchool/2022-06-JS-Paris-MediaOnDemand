import React, { useEffect, useState } from "react";
import "./UserCart.scss";
import notFoundImg from "@assets/media_non_trouve.svg";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const [trigger, setTrigger] = useState(true);

  const update = () => setTrigger(!trigger);

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
      {
        purchaseTitle: article.articleTitle,
        purchaseImage: article.articleImage,
        purchaseId: article.articleId,
      },
      ...purchase,
    ]);
    deleteStorage(article.articleId);
    setIsPay(false);
    update();
  };

  useEffect(() => {
    if (windowWidth >= 1440) {
      if (purchase[3] && purchase[3].notFound) {
        const tempPurchase = [...purchase];
        tempPurchase.pop();
        setPurchase([...tempPurchase]);
      }
      if (purchase.length === 1) {
        setPurchase([
          ...purchase,
          { purchaseImage: notFoundImg, notFound: true, purchaseId: "null2" },
          { purchaseImage: notFoundImg, notFound: true, purchaseId: "null3" },
        ]);
      } else if (purchase.length === 2) {
        setPurchase([
          ...purchase,
          {
            purchaseImage: notFoundImg,
            notFound: true,
            purchaseId: "null3",
          },
        ]);
      }
    } else if (windowWidth >= 768) {
      if (purchase[2] && purchase[2].notFound) {
        const tempPurchase = [...purchase];
        tempPurchase.pop();
        setPurchase([...tempPurchase]);
      }
      if (purchase.length === 1) {
        setPurchase([
          ...purchase,
          {
            purchaseImage: notFoundImg,
            notFound: true,
            purchaseId: "null3",
          },
        ]);
      }
    }
  }, [trigger]);

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
