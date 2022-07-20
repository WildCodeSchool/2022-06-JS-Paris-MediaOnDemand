import React, { useState, useEffect } from "react";
import { TabBar, TabUser } from "@components/";
import "./UserPage.scss";
import { useThemeContext } from "@context/ThemeContext";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState();
  const getUser = () => {
    axios
      .get(`https://randomuser.me/api/?inc=name,picture`)
      .then((response) => response.data)
      .then((data) => {
        setUser(data.results[0]);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <div className="userPage">
      <div className="userPage__container">
        <div className="userPage__userId">
          {user && user.name.first && (
            <>
              <img src={user.picture.thumbnail} alt={user.name.first} />
              <h1>Bienvenue {user.name.first}</h1>
            </>
          )}
        </div>
        <TabUser />
      </div>
      <TabBar />
    </div>
  );
};

export default UserPage;
