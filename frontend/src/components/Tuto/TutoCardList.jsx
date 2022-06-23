import React from "react";
import { BasketIcon, CheckBoxIcon, CornucopiaIcon } from "../../assets/svgIcon";
import TutoCard from "./TutoCard";

const tutoItems = [
  {
    id: 1,
    tutoName: "LOOK FOR CAT",
    className: "tuto-card-1",
    tutoImg: <CheckBoxIcon />,
  },
  {
    id: 2,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-2",
    tutoImg: <CornucopiaIcon />,
  },
  {
    id: 3,
    tutoName: "FIND ARTICLES",
    className: "tuto-card-3",
    tutoImg: <BasketIcon />,
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
        >
          {tuto.tutoImg}
        </TutoCard>
      ))}
    </div>
  );
}

export default TutoCardList;
