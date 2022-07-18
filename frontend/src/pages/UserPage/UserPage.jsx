import React, { useEffect } from "react";
import { TabBar, TabUser } from "@components/";
import "./UserPage.scss";
import { useThemeContext } from "@context/ThemeContext";

const UserPage = () => {
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setTheme("");
  }, []);
  return (
    <div className="user-container">
      <h1>Bienvenue Rico</h1>
      <TabUser />
      <TabBar />
    </div>
  );
};

export default UserPage;
