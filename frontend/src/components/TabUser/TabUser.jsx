import { HeartIcon } from "@assets/iconsCard";
import { CartIcon, DownloadIcon } from "@assets/svgIcon";
import React, { useState } from "react";
import { Favorite, UserCart } from "@components/";
import "./TabUser.scss";

export const TabUser = () => {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="tab_user__globalComponent">
      <div className="tab_user__container">
        <div className="tab_user__content-tabs">
          <div
            className={
              toggleTabs === 1
                ? "tab_user__content tab_user__active-content tab_user__content--color"
                : "tab_user__content"
            }
          >
            <Favorite />
          </div>
          <div
            className={
              toggleTabs === 2
                ? "tab_user__content tab_user__active-content tab_user__content--color"
                : "tab_user__content"
            }
          >
            <UserCart />
          </div>
          <div
            className={
              toggleTabs === 3
                ? "tab_user__content tab_user__active-content tab_user__content--color"
                : "tab_user__content"
            }
          >
            {/* <MusicCardList mediaList={music} /> */}
          </div>
        </div>

        <div className="tab_user__bloc-tabs">
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 1
                ? "tab_user__tabs tab_user__active-tabs tab_user__color"
                : "tab_user__tabs"
            }
            onClick={() => toggleTab(1)}
            onKeyPress={() => toggleTab(1)}
          >
            <HeartIcon width="48px" height="48px" />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 2
                ? "tab_user__tabs tab_user__active-tabs tab_user__color"
                : "tab_user__tabs"
            }
            onClick={() => toggleTab(2)}
            onKeyPress={() => toggleTab(2)}
          >
            <CartIcon width="48px" height="48px" />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 3
                ? "tab_user__tabs tab_user__active-tabs tab_user__color"
                : "tab_user__tabs"
            }
            onClick={() => toggleTab(3)}
            onKeyPress={() => toggleTab(3)}
          >
            <DownloadIcon width="48px" height="48px" />
          </div>
        </div>
      </div>
    </div>
  );
};
