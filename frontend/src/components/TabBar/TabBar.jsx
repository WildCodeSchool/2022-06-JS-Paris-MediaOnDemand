import React from "react";
import homeImage from "../../assets/home.png";
import homeUtilisateur from "../../assets/utilisateur.png";
import { SophiaIcon } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  return (
    <div className="nav-bar">
      <img src={homeImage} alt="home" />
      <SophiaIcon style={{ width: "150" }} />
      <img src={homeUtilisateur} alt="utilisateur" />
    </div>
  );
};
