import React from "react";
import "./TutoCard.scss";

export const TutoCard = ({ className, tutoName, children }) => {
  const classNameTutoCard = `tuto-card ${className}`;

  return (
    <div className={classNameTutoCard}>
      <h3 className="tuto-card__name">{tutoName}</h3>
      {children}
    </div>
  );
};
