import React, { useState, useEffect } from "react";
import { MediaCardList, MovieCardList, MusicCardList } from "@components";
import {
  useMovieContext,
  useMusicContext,
  useMediaSelectedContext,
} from "@context";
import { isMediaSelected } from "@tools/utils";
import "./Tab.scss";

// const TabMedia = ({ toggleTabs, setToggleTabs, mediaTitle, tabIdx }) => {
//   const toggleTab = (index) => {
//     setToggleTabs(index);
//   };
//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       className={
//         toggleTabs === { tabIdx }
//           ? `tab__tabs tab__active-tabs tab__color${tabIdx}`
//           : "tab__tabs"
//       }
//       onClick={() => toggleTab({ tabIdx })}
//       onKeyPress={() => toggleTab({ tabIdx })}
//     >
//       <h3>{mediaTitle}</h3>
//     </div>
//   );
// };
export const Tab = () => {
  const [toggleTabs, setToggleTabs] = useState();
  const { movies } = useMovieContext();
  const { music } = useMusicContext();
  const { mediasSelected } = useMediaSelectedContext();

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  useEffect(() => {
    setToggleTabs(mediasSelected[0]);
    return () => setToggleTabs("");
  }, []);

  return (
    <div className="tab__globalComponent">
      <div className="tab__container">
        <div className="tab__content-tabs">
          <div
            className={
              toggleTabs === "movie"
                ? "tab__content tab__active-content tab__color1"
                : "tab__content"
            }
          >
            <MediaCardList mediaList={movies} />
          </div>
          <div
            className={
              toggleTabs === "book"
                ? "tab__content tab__active-content tab__color2"
                : "tab__content"
            }
          >
            <MovieCardList mediaList={movies} />
          </div>
          <div
            className={
              toggleTabs === "music"
                ? "tab__content tab__active-content tab__color3"
                : "tab__content"
            }
          >
            <MusicCardList mediaList={music} />
          </div>
        </div>

        <div className="tab__bloc-tabs">
          {isMediaSelected(mediasSelected, "movie") && (
            <div
              role="button"
              tabIndex={0}
              className={
                toggleTabs === "movie"
                  ? "tab__tabs tab__active-tabs tab__color1"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("movie")}
              onKeyPress={() => toggleTab("movie")}
            >
              Films
            </div>
          )}
          {isMediaSelected(mediasSelected, "book") && (
            <div
              role="button"
              tabIndex={0}
              className={
                toggleTabs === "book"
                  ? "tab__tabs tab__active-tabs tab__color2"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("book")}
              onKeyPress={() => toggleTab("book")}
            >
              Livres
            </div>
          )}
          {isMediaSelected(mediasSelected, "music") && (
            <div
              role="button"
              tabIndex={0}
              className={
                toggleTabs === "music"
                  ? "tab__tabs tab__active-tabs tab__color3"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("music")}
              onKeyPress={() => toggleTab("music")}
            >
              Musiques
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
