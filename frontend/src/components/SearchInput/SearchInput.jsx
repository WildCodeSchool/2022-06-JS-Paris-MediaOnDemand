import React from "react";
import "./SearchInput.scss";

export const SearchInput = ({ searchValue, handleSubmit }) => {
  return (
    <form className="search" onSubmit={() => handleSubmit()}>
      <input
        type="search"
        placeholder="Que cherchez vous?"
        className="search__input"
        id="search"
        value={searchValue}
      />
      <button type="submit" className="search__btn">
        SEARCH
      </button>
    </form>
  );
};
