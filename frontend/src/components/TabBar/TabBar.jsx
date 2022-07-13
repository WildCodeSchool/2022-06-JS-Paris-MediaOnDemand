import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, HomeIcon } from "@assets/iconsTabBar";
import { SophiaIcon, SophiaIconVertical } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <div className="nav-bar">
      <Link to="/go-sophia">
        <HomeIcon />
      </Link>
      {windowWidth < 768 ? <SophiaIcon /> : <SophiaIconVertical />}
      <UserIcon />
    </div>
  );
};
