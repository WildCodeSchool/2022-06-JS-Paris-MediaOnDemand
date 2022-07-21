import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon, HomeIcon } from "@assets/iconsTabBar";
import { useThemeContext } from "@context";
import { SophiaIcon, SophiaIconVertical } from "../../assets/svgIcon";
import "./TabBar.scss";

export const TabBar = () => {
  const { theme } = useThemeContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  let colorIcon = "#ccc591";
  if (theme === "theme--movie") colorIcon = "#80a0ff";
  if (theme === "theme--music") colorIcon = "#b5715b";
  if (theme === "theme--book") colorIcon = "#ddcf7f";

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleNavigate = () => navigate("/");

  return (
    <div className="nav-bar">
      <Link to="/go-sophia" className="tabBarIcon">
        <HomeIcon colorIcon={colorIcon} />
      </Link>
      {windowWidth < 768 || windowWidth > 1439 ? (
        <SophiaIcon
          className="logoIcon cursor"
          onClick={() => handleNavigate()}
        />
      ) : (
        <SophiaIconVertical
          classeName="cursor"
          onClick={() => handleNavigate()}
        />
      )}
      <Link to="/profile" className="tabBarIcon">
        <UserIcon colorIcon={colorIcon} />
      </Link>
    </div>
  );
};
