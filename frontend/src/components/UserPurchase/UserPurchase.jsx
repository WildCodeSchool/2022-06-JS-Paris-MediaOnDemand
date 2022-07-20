import React, { useEffect, useState } from "react";
import "../../theme.scss";
import "./UserPurchase.scss";
import "@components/Button/Button.scss";
import { DownloadIcon } from "@assets/svgIcon";

export const UserPurchase = ({ title, image }) => {
  const [download, setDownload] = useState(false);
  const [barWidth, setBarWidth] = useState(100);
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setDownload(!download);
  };

  useEffect(() => {
    let width = 100;
    let count = 0;
    if (download) {
      setInterval(() => {
        if (width === 0) {
          clearInterval(setInterval);
          setMessage(`${title} téléchargé`);
        } else {
          width -= 1;
          count += 1;
          setCounter(count);
          setBarWidth(width);
        }
      }, 50);
    }
  }, [download]);

  return !download ? (
    <div className="purchaseCard">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="purchaseCard__image"
      />{" "}
      <h3 className="purchaseCard__title">{title}</h3>
      <DownloadIcon onClick={() => handleClick()} />
    </div>
  ) : (
    <div className="downloadCard">
      <div className="downloadBar">
        <div>{`${counter}%`}</div>
        <div className="downloadProgress" style={{ width: `${barWidth}%` }} />
      </div>
      <p className="message">{message}</p>
    </div>
  );
};
