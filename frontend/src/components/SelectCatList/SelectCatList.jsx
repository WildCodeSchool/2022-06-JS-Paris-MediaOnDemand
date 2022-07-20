import React from "react";
import { SelectCat } from "@components";
import "./SelectCatList.scss";

export const SelectCatList = ({ mediaCat, setFiltersSelected }) => {
  const { mediaName, mediaCatName, mediaSelectList } = mediaCat;

  return (
    <div className="cat-list">
      <h3>{mediaName}</h3>
      <div className="cat-list__select">
        {mediaSelectList?.map((mediaSelect) => (
          <SelectCat
            selectLabel={mediaSelect.selectLabel}
            key={mediaSelect.uuidSelect}
            defaultOption={mediaSelect.defaultOption}
            selectOptions={mediaSelect.selectOptions}
            selectId={mediaSelect.selectId}
            setFiltersSelected={setFiltersSelected}
            mediaCatName={mediaCatName}
          />
        ))}
      </div>
    </div>
  );
};
