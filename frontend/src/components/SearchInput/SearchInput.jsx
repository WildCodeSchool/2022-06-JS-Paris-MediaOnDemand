import React from "react";
import "./SearchInput.scss";

export const SearchInput = ({ searchValue, handleSubmit, onChange }) => {
  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        placeholder="Que cherchez vous?"
        className="search__input"
        id="search"
        value={searchValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" className="search__btn">
        GO!
      </button>
    </form>
  );
};
