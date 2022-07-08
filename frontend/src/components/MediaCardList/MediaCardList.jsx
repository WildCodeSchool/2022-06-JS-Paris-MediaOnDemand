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
      selectedItem={0}
    >
      {mediaList &&
        mediaList.map((media, index) => (
          <MediaCard
            key={media.id}
            title={media.title}
            count={index + 1}
            total={mediaList.length}
            image={`https://image.tmdb.org/t/p/original${media.poster_path}`}
            mediaId={media.id}
            mediaCat="film"
          />
        ))}
    </Carousel>
  );
};
