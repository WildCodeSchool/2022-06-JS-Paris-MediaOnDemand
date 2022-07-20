import React, { useState } from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import "./MediaCardList.scss";
import notFoundImg from "@assets/media_non_trouve.svg";

export const MovieCardList = ({ movieList }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth >= 1440) {
    if (movieList.length === 0) {
      movieList.push(
        { poster_path: notFoundImg, notFound: true, id: "null1" },
        { poster_path: notFoundImg, notFound: true, id: "null2" },
        { poster_path: notFoundImg, notFound: true, id: "null3" }
      );
    } else if (movieList.length === 1) {
      movieList.push(
        { poster_path: notFoundImg, notFound: true, id: "null1" },
        { poster_path: notFoundImg, notFound: true, id: "null2" }
      );
    } else if (movieList.length === 2) {
      movieList.push({ poster_path: notFoundImg, notFound: true, id: "null1" });
    }
  } else if (windowWidth >= 768) {
    if (movieList.length === 0) {
      movieList.push(
        { poster_path: notFoundImg, notFound: true, id: "null1" },
        { poster_path: notFoundImg, notFound: true, id: "null2" }
      );
    } else if (movieList.length === 1) {
      movieList.push({ poster_path: notFoundImg, notFound: true, id: "null1" });
    }
  } else if (windowWidth < 768) {
    if (movieList.length === 0) {
      movieList.push({ poster_path: notFoundImg, notFound: true, id: "null1" });
    }
  }

  const responsive = {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1439: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      controlsStrategy="alternate"
      mouseTracking
      touchTracking
      disableDotsControls
      infinite
    >
      {movieList.map((movie, index) => (
        <MediaCard
          key={movie.id}
          title={movie.title}
          count={index + 1}
          total={movieList.length}
          image={
            movie.poster_path === notFoundImg
              ? movie.poster_path
              : `https://image.tmdb.org/t/p/original${movie.poster_path}`
          }
          mediaId={movie.id}
          mediaCat="film"
          isNotFound={movie.notFound}
        />
      ))}
    </AliceCarousel>
  );
};
