import React from "react";
import { SelectCheckBox } from "@components";
import { useMediaSelectedContext } from "@context";
import "./SelectCheckBoxList.scss";

export const SelectCheckBoxList = ({ setMediasSelected }) => {
  const selectList = [
    { label: "Film", value: "movie" },
    { label: "Livre", value: "book" },
    { label: "Musique", value: "music" },
  ];
  const { mediasSelected } = useMediaSelectedContext();

  const handleSelect = (checkEvent) => {
    const { name, checked } = checkEvent.target;
    setMediasSelected((prevState) => {
      if (checked && !prevState.includes(name)) {
        return [...prevState, name];
      }
      if (checked) {
        return [...prevState];
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
          isChecked={mediasSelected.includes(select.value)}
        />
      ))}
    </div>
  );
};
