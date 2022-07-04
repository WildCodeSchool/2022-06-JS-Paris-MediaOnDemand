import React from "react";
import "./SelectCatList.scss";
import { SelectCat } from "..";

export const SelectCatList = ({ mediaCat }) => {
  const { mediaName, mediaSelectList } = mediaCat;
  return (
    <div className="cat-list">
      <h3>{mediaName}</h3>
      <div className="cat-list__select">
        {mediaSelectList?.map((mediaSelect) => (
          <SelectCat
            selectLabel={mediaSelect.selectLabel}
            key={mediaSelect.label}
            defaultOption={mediaSelect.defaultOption}
            selectOptions={mediaSelect.selectOptions}
            selectId={mediaSelect.selectId}
          />
        ))}
      </div>
    </div>
  );
};
