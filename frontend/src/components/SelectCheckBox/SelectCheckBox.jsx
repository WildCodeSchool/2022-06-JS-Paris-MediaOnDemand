import React from "react";
import "./SelectCheckBox.scss";

export const SelectCheckBox = ({ value, label, handleSelect, isChecked }) => {
  return (
    <div className="select-checkbox">
      <input
        className={`select-checkbox__input--${value}`}
        type="checkbox"
        id={value}
        name={value}
        onChange={(e) => handleSelect(e)}
        checked={isChecked}
      />
      <label className="select-checkbox__label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};
