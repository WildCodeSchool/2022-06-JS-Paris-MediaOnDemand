import React, { useState } from "react";
import Favorite from "../Favorite/Favorite";
import "./TabUser.scss";

const TabUser = () => {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="tab__globalComponent">
      <div className="tab__container">
        <div className="tab__content-tabs">
          <div
            className={
              toggleTabs === 1
                ? "tab__content tab__active-content tab__color1"
                : "tab__content"
            }
          >
            <Favorite />
          </div>
          <div
            className={
              toggleTabs === 2
                ? "tab__content tab__active-content tab__color2"
                : "tab__content"
            }
          >
            {/* <BookCardList bookList={books} /> */}
          </div>
          <div
            className={
              toggleTabs === 3
                ? "tab__content tab__active-content tab__color3"
                : "tab__content"
            }
          >
            {/* <MusicCardList mediaList={music} /> */}
          </div>
        </div>

        <div className="tab__bloc-tabs">
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 1
                ? "tab__tabs tab__active-tabs tab__color1"
                : "tab__tabs"
            }
            onClick={() => toggleTab(1)}
            onKeyPress={() => toggleTab(1)}
          >
            Favoris
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 2
                ? "tab__tabs tab__active-tabs tab__color2"
                : "tab__tabs"
            }
            onClick={() => toggleTab(2)}
            onKeyPress={() => toggleTab(2)}
          >
            Panier
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              toggleTabs === 3
                ? "tab__tabs tab__active-tabs tab__color3"
                : "tab__tabs"
            }
            onClick={() => toggleTab(3)}
            onKeyPress={() => toggleTab(3)}
          >
            Achat
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabUser;
