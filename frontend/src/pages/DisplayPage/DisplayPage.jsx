import React from "react";
import { Tab } from "@components/Tab/Tab";
import { TabBar } from "@components/";
import "./DisplayPage.scss";

const DisplayPage = () => {
  //  const size = window.innerWidth;
  return (
    <div className="display-container">
      <Tab />
      <TabBar />
    </div>
  );
};

export default DisplayPage;
