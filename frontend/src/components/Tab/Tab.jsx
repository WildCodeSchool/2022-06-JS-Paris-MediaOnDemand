import React, { useState } from "react";
import { MediaCardList } from "@components";
import { useMovieContext } from "../../context/MovieContext";
import "./Tab.scss";

export const Tab = () => {
  const [toggleTabs, setToggleTabs] = useState(1);
  const { movies } = useMovieContext();

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
            <MediaCardList mediaList={movies} />
          </div>
          <div
            className={
              toggleTabs === 2
                ? "tab__content tab__active-content tab__color2"
                : "tab__content"
            }
          >
            <MediaCardList mediaList={movies} />
          </div>
          <div
            className={
              toggleTabs === 3
                ? "tab__content tab__active-content tab__color3"
                : "tab__content"
            }
          >
            <MediaCardList mediaList={movies} />
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
            movie
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
            book
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
            music
          </div>
        </div>
      </div>
    </div>
  );
};
