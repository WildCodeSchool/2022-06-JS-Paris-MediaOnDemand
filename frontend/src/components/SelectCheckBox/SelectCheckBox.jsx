import React from "react";
import "./SelectCheckBox.scss";

export const SelectCheckBox = ({ value, label }) => {
  return (
    <div className="select-checkbox">
      <input
        className="select-checkbox__input"
        type="checkbox"
        id={value}
        name={value}
      />
      <label className="select-checkbox__label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};
