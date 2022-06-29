import React from "react";
import "./SearchInput.scss";

export const SearchInput = ({ searchValue, handleSubmit }) => {
  return (
    <form id="searchBlock" onSubmit={() => handleSubmit()}>
      <input
        type="search"
        placeholder="que cherchez vous?"
        className="search"
        id="search"
        value={searchValue}
      />
      <button type="submit" id="searchBtn">
        SEARCH
      </button>
    </form>
  );
};
