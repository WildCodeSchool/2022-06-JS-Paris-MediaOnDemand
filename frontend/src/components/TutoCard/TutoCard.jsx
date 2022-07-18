import React from "react";
import "./TutoCard.scss";

export const TutoCard = ({ className, tutoName, children }) => {
  return (
    <div className={`tuto-card__content ${className}`}>
      <span />
      <span />
      <span />
      <h3 className="tuto-card__name">{tutoName}</h3>
      {children}
    </div>
  );
};
