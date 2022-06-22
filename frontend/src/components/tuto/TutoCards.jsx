import React from "react";
import TutoCard from "./TutoCard";

const tutoItems = [
  {
    id: 1,
    tutoName: "LOOK FOR CAT",
    className: "tuto-card-1",
  },
  {
    id: 2,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-2",
  },
  {
    id: 3,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-3",
  },
];

function TutoCards() {
  return (
    <div className="tuto-container">
      {tutoItems.map((tuto) => (
        <TutoCard
          className={tuto.className}
          key={tuto.id}
          tutoName={tuto.tutoName}
        >
          {/* <ComposantImage /> */}
        </TutoCard>
      ))}
    </div>
  );
}

export default TutoCards;
