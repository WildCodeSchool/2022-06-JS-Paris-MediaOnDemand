import React from "react";
import "./TutoCard.css";

// eslint-disable-next-line react/prop-types
function TutoCard({ className, tutoName /* children img */ }) {
  const classNameTutoCard = `tuto-card ${className}`;

  return (
    <div className={classNameTutoCard}>
      <h3 className="tuto-card__name">{tutoName}</h3>
      {/* <img src={img} alt=" */}
      {/* {children} */}
    </div>
  );
}

export default TutoCard;
