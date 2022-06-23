import React from "react";
import "./SelectChexbox.css";

function SelectChexbox({ idFor, contenu }) {
  return (
    <div className="select-chexbox">
      <input type="checkbox" id={idFor} name={contenu} />
      <label htmlFor={idFor}>{contenu}</label>
    </div>
  );
}

export default SelectChexbox;
