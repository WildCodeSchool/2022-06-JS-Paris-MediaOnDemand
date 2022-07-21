import { useState } from "react";
import notFoundImg from "@assets/media_non_trouve.svg";
import { usePurchaseContext } from "@context/PurchaseContext";

export const CleanArray = () => {
  const { purchase, setPurchase } = usePurchaseContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth >= 1440) {
    if (purchase.length === 0) {
      setPurchase(
        { purchaseImage: notFoundImg, notFound: true, id: "null1" },
        { purchaseImage: notFoundImg, notFound: true, id: "null2" },
        { purchaseImage: notFoundImg, notFound: true, id: "null3" }
      );
    } else if (purchase.length === 1) {
      setPurchase(
        ...purchase,
        { purchaseImage: notFoundImg, notFound: true, id: "null2" },
        { purchaseImage: notFoundImg, notFound: true, id: "null3" }
      );
    } else if (purchase.length === 2) {
      setPurchase(...purchase, {
        purchaseImage: notFoundImg,
        notFound: true,
        id: "null3",
      });
    }
  } else if (windowWidth >= 768) {
    if (purchase.length === 0) {
      setPurchase(
        ...purchase,
        { purchaseImage: notFoundImg, notFound: true, id: "null2" },
        { purchaseImage: notFoundImg, notFound: true, id: "null3" }
      );
    } else if (purchase.length === 1) {
      setPurchase(...purchase, {
        purchaseImage: notFoundImg,
        notFound: true,
        id: "null3",
      });
    }
  } else if (windowWidth < 768) {
    if (purchase.length === 0) {
      setPurchase(...purchase, {
        purchaseImage: notFoundImg,
        notFound: true,
        id: "null3",
      });
    }
  }
};
