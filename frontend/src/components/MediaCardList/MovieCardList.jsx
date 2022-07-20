/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const MovieCardList = ({ movieList }) => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      controlsStrategy="alternate"
      // mouseTracking
      // touchTracking
      // vertical={false}
      // autoHeight
      // autoWidth
      disableDotsControls
      disableButtonsControls
      infinite
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // itemClass="carousel-item"
    >
      {movieList.map((movie, index) => (
        <MediaCard
          key={movie.id}
          title={movie.title}
          count={index + 1}
          total={movieList.length}
          image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          mediaId={movie.id}
          mediaCat="film"
        />
      ))}
    </AliceCarousel>
  );
};

{
  /* {movieList ? (
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
  )} */
}

{
  /* </Carousel> */
}
