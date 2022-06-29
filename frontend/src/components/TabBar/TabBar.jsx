import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, HomeIcon } from "@assets/iconsTabBar";
import { SophiaIcon } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <HomeIcon />
      </Link>
      <SophiaIcon style={{ width: "150" }} />
      <UserIcon />
    </div>
  );
};
