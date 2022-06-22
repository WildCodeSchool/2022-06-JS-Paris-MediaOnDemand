import React from "react";
import "./TutoCard.css";

// eslint-disable-next-line react/prop-types
function TutoCard({ className, tutoName, children }) {
  return (
    <div className={className}>
      <h3 className="tuto-card__name">{tutoName}</h3>
      {children}
    </div>
  );
}

export default TutoCard;
