import React, { useState, useEffect } from "react";
import { BookCardList, MovieCardList, MusicCardList } from "@components";
import {
  useMovieContext,
  useMusicContext,
  useBookContext,
  useThemeContext,
  useMediaSelectedContext,
} from "@context";
import { isMediaSelected } from "@tools/utils";
import "./Tab.scss";

export const Tab = () => {
  const [toggleTabs, setToggleTabs] = useState();
  const { movies } = useMovieContext();
  const { music } = useMusicContext();
  const { books } = useBookContext();
  const { setTheme } = useThemeContext();
  const { mediasSelected } = useMediaSelectedContext();

  const toggleTab = (index) => {
    setToggleTabs(index);
    setTheme(`theme--${index}`);
  };

  useEffect(() => {
    setToggleTabs(mediasSelected[0]);
    setTheme(`theme--${mediasSelected[0]}`);
    return () => {
      setToggleTabs("");
    };
  }, []);

  return (
    <div className="tab__globalComponent">
      <div className="tab__container">
        <div className="tab__content-tabs">
          <div
            className={
              toggleTabs === "movie"
                ? "tab__content tab__active-content tab__content--color"
                : "tab__content"
            }
          >
            <MovieCardList movieList={movies} />
          </div>
          <div
            className={
              toggleTabs === "book"
                ? "tab__content tab__active-content tab__content--color"
                : "tab__content"
            }
          >
            <BookCardList bookList={books} />
          </div>
          <div
            className={
              toggleTabs === "music"
                ? "tab__content tab__active-content tab__content--color"
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
                  ? "tab__tabs tab__active-tabs tab__color"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("movie")}
              onKeyPress={() => toggleTab("movie")}
            >
              <h3>Films</h3>
            </div>
          )}
          {isMediaSelected(mediasSelected, "book") && (
            <div
              role="button"
              tabIndex={0}
              className={
                toggleTabs === "book"
                  ? "tab__tabs tab__active-tabs tab__color"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("book")}
              onKeyPress={() => toggleTab("book")}
            >
              <h3>Livres</h3>
            </div>
          )}
          {isMediaSelected(mediasSelected, "music") && (
            <div
              role="button"
              tabIndex={0}
              className={
                toggleTabs === "music"
                  ? "tab__tabs tab__active-tabs tab__color"
                  : "tab__tabs"
              }
              onClick={() => toggleTab("music")}
              onKeyPress={() => toggleTab("music")}
            >
              <h3>Musiques</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
