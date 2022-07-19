import React from "react";
import { MediaCard } from "@components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import notFoundImg from "@assets/media_non_trouve.svg";

import "./MediaCardList.scss";

export const MovieCardList = ({ movieList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1439, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item"
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
    </Carousel>
  );
};
