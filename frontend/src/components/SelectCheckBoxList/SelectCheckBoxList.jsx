import React from "react";
import { SelectCheckBox } from "@components";
import "./SelectCheckBoxList.scss";

export const SelectCheckBoxList = ({ setMediasSelected }) => {
  const selectList = [
    { label: "Film", value: "movie" },
    { label: "Musique", value: "music" },
    { label: "Livre", value: "book" },
  ];

  const handleSelect = (checkEvent) => {
    const { name, checked } = checkEvent.target;
    setMediasSelected((prevState) => {
      if (checked) {
        return [...prevState, name];
      }
      return prevState.filter((media) => media !== name);
    });
  };
  return (
    <div className="checkbox-list">
      {selectList.map((select) => (
        <SelectCheckBox
          key={select.label}
          value={select.value}
          label={select.label}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};
