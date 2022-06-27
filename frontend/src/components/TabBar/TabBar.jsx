import React from "react";
import { UserIcon, HomeIcon } from "@assets/iconsTabBar";
import { SophiaIcon } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  return (
    <div className="nav-bar">
      <HomeIcon />
      <SophiaIcon style={{ width: "150" }} />
      <UserIcon />
    </div>
  );
};
