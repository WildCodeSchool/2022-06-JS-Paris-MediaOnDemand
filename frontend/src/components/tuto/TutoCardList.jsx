import React from "react";
import TutoCard from "./TutoCard";

const tutoItems = [
  {
    id: 1,
    tutoName: "LOOK FOR CAT",
    className: "tuto-card-1",
    img: "",
  },
  {
    id: 2,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-2",
    img: "",
  },
  {
    id: 3,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-3",
    img: "",
  },
];

function TutoCardList() {
  return (
    <div className="tuto-container">
      {tutoItems.map((tuto) => (
        <TutoCard
          className={tuto.className}
          key={tuto.id}
          tutoName={tuto.tutoName}
          // img={tuto.img}
        >
          {/* <Img /> */}
        </TutoCard>
      ))}
    </div>
  );
}

export default TutoCardList;
