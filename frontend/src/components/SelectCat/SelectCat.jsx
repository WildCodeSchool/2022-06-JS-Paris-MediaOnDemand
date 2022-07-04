import React from "react";
import "./SelectCat.scss";

export const SelectCat = ({
  selectLabel,
  defaultOption,
  selectOptions,
  selectId,
}) => {
  return (
    <div className="select-cat">
      <label className="select-cat__label" htmlFor={selectId}>
        {selectLabel}
      </label>
      <select className="select-cat__select" name={selectId} id={selectId}>
        <option value="">{defaultOption}</option>
        {selectOptions?.map((selectOption) => (
          <option key={selectOption.text} value={selectOption.value}>
            {selectOption.text}
          </option>
        ))}
      </select>
    </div>
  );
};
