import React from "react";
import { SelectCheckBox } from "@components";
import "./SelectCheckBoxList.scss";

export const SelectCheckBoxList = () => {
  const selectList = [
    { label: "Film", value: "movie" },
    { label: "Musique", value: "music" },
    { label: "Livre", value: "book" },
  ];
  return (
    <div className="checkbox-list">
      {selectList.map((select) => (
        <SelectCheckBox value={select.value} label={select.label} />
      ))}
    </div>
  );
};
