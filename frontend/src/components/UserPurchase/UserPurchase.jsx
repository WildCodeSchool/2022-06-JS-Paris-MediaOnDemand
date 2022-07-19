import React, { useEffect, useState } from "react";
import "../../theme.scss";
import "./UserPurchase.scss";
import "@components/Button/Button.scss";
import { DownloadIcon } from "@assets/svgIcon";

export const UserPurchase = ({ title, image }) => {
  const [download, setDownload] = useState(false);
  // let width = 0;
  const [barWidth, setBarWidth] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setDownload(!download);
  };

  useEffect(() => {
    let width = 0;
    if (download) {
      setInterval(() => {
        width += 5;
        setBarWidth(width);
      }, 100);
    }
    return () => {};
  }, [download]);

  if (barWidth === 100) {
    clearInterval(setInterval);
    setMessage("téléchargement terminé!");
  }

  return !download ? (
    <div className="purchaseCard">
      <img src={image} className="purchaseCard__image" alt="" />
      <h3 className="purchaseCard__title">{title}</h3>
      <DownloadIcon onClick={() => handleClick()} />
    </div>
  ) : (
    <div className="downloadCard">
      <div className="downloadBar">
        <div className="downloadProgress" style={{ width: `${barWidth}%` }}>
          {`${barWidth}%`}
        </div>
      </div>
      <div>{message}</div>
    </div>
  );
};
