import React from "react";
import { Tab } from "@components/Tab/Tab";
import { TabBar } from "@components/";
import "./DisplayPage.scss";

const DisplayPage = () => {
  return (
    <div className="display-container">
      <Tab />
      <TabBar />
    </div>
  );
};

export default DisplayPage;
