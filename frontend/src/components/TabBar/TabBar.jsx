import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, HomeIcon } from "@assets/iconsTabBar";
import { useThemeContext } from "@context";
import { SophiaIcon, SophiaIconVertical } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  const { theme } = useThemeContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let colorIcon = "#ccc591";
  if (theme === "theme--movie") colorIcon = "#80a0ff";
  if (theme === "theme--music") colorIcon = "#b5715b";
  if (theme === "theme--book") colorIcon = "#ddcf7f";

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <div className="nav-bar">
      <Link to="/go-sophia">
        <HomeIcon colorIcon={colorIcon} />
      </Link>
      {windowWidth < 768 ? <SophiaIcon /> : <SophiaIconVertical />}
      <Link to="/profile">
        <UserIcon colorIcon={colorIcon} />
      </Link>
    </div>
  );
};
