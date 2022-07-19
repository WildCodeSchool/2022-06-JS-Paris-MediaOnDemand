import React, { useEffect, useState } from "react";
import "../../theme.scss";
import "./UserPurchase.scss";
import "@components/Button/Button.scss";
import { DownloadIcon } from "@assets/svgIcon";

export const UserPurchase = ({ title, image }) => {
  const [download, setDownload] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setDownload(!download);
  };

  useEffect(() => {
    let width = 0;
    if (download) {
      setInterval(() => {
        if (width === 100) {
          clearInterval(setInterval);
          setMessage(`${title} téléchargé`);
        } else {
          width += 1;
          setBarWidth(width);
        }
      }, 50);
    }
  }, [download]);

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
          <div>{`${barWidth}%`}</div>
        </div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};
