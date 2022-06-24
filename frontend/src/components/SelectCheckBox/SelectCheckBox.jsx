import React from "react";
import "./SelectCheckBox.scss";

export const SelectCheckBox = ({ idFor, contenu }) => {
  return (
    <div className="select-chexbox">
      <input type="checkbox" id={idFor} name={contenu} />
      <label htmlFor={idFor}>{contenu}</label>
    </div>
  );
};
