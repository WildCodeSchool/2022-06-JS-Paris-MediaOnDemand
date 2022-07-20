import React from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import "./MediaCardList.scss";
import notFoundImg from "@assets/media_non_trouve.svg";

export const MovieCardList = ({ movieList }) => {
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
      {movieList ? (
        movieList.map((movie, index) => (
          <MediaCard
            key={movie.id}
            title={movie.title}
            count={index + 1}
            total={movieList.length}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            mediaId={movie.id}
            mediaCat="film"
          />
        ))
      ) : (
        <MediaCard
          title="Not Found"
          count={1}
          total={1}
          image={notFoundImg}
          mediaCat="film"
        />
      )}
    </AliceCarousel>
  );
};
