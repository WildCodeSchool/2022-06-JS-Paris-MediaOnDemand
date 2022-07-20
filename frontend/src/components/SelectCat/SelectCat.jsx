import React from "react";
import "./SelectCat.scss";

export const SelectCat = ({
  selectLabel,
  defaultOption,
  selectOptions,
  selectId,
  setFiltersSelected,
  mediaCatName,
}) => {
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFiltersSelected((prevState) => {
      if (value) {
        return {
          ...prevState,
          [mediaCatName]: [
            ...prevState[mediaCatName].filter((media) => media.name !== name),
            { name, value },
          ],
        };
      }
      return {
        ...prevState,
        [mediaCatName]: prevState[mediaCatName].filter(
          (media) => media.name !== name
        ),
      };
    });
  };

  return (
    <div className="select-cat">
      <label className="select-cat__label" htmlFor={selectId}>
        {selectLabel}
      </label>
      {selectOptions && (
        <select
          className="select-cat__select"
          name={selectId}
          id={selectId}
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="">{defaultOption}</option>
          {selectOptions?.map((selectOption) => (
            <option key={selectOption.text} value={selectOption.value}>
              {selectOption.text}
            </option>
          ))}
        </select>
      )}
      {!selectOptions && (
        <input
          className="select-input"
          type="text"
          name={selectId}
          placeholder={defaultOption}
          onChange={(e) => handleSelectChange(e)}
        />
      )}
    </div>
  );
};
