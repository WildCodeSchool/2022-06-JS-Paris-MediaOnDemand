import React from "react";
import { MediaCard } from "@components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MediaCardList.scss";

export const MediaCardList = ({ mediaList }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {mediaList &&
        mediaList.map((movie, index) => (
          <MediaCard
            key={movie.id}
            title={movie.title}
            count={index + 1}
            total={mediaList.length}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        ))}
    </Carousel>
  );
};
