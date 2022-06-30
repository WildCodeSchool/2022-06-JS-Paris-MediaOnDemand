import React from "react";
import { SearchInput, TabBar, SelectCheckBoxList } from "@components";
import "./SearchPage.scss";

export const SearchPage = () => {
  return (
    <div className="search-page">
      <SearchInput />
      <SelectCheckBoxList />
      <TabBar />
    </div>
  );
};
