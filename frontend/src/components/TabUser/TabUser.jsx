import { HeartIcon } from "@assets/iconsCard";
import { CartIcon, DownloadIcon } from "@assets/svgIcon";
import React, { useState } from "react";
import { Favorite, UserCart, UserPurchaseList } from "@components/";
import "./TabUser.scss";

export const TabUser = () => {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="tab__globalComponent1">
      <div className="tab__container1">
        <div className="tab__content-tabs1">
          <div
            className={
              toggleTabs === 1
                ? "tab__content tab__active-content tab__color"
                : "tab__content"
            }
          >
            <Favorite />
          </div>
          <div
            className={
              toggleTabs === 2
                ? "tab__content tab__active-content tab__color"
                : "tab__content"
            }
          >
            <UserCart />
          </div>
          <div
            className={
              toggleTabs === 3
                ? "tab__content tab__active-content tab__color"
                : "tab__content"
            }
          >
            <UserPurchaseList />
          </div>
        </div>

        <div className="tab__bloc-tabs">
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 1
                ? "tab__tabs tab__active-tabs tab__color"
                : "tab__tabs"
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
                ? "tab__tabs tab__active-tabs tab__color"
                : "tab__tabs"
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
                ? "tab__tabs tab__active-tabs tab__color"
                : "tab__tabs"
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
