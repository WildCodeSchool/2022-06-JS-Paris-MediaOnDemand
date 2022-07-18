import React from "react";
import TabUser from "@components/TabUser/TabUser";
import { TabBar } from "@components/";
import "./UserPage.scss";

const UserPage = () => {
  return (
    <div className="user-container">
      <h1>Bienvenue Rico</h1>
      <TabUser />
      <TabBar />
    </div>
  );
};

export default UserPage;
