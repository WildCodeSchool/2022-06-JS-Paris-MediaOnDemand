import React from "react";
import { MediaCard } from "@components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const MusicCardList = ({ mediaList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item"
    >
      {mediaList ? (
        mediaList.map((music, index) => (
          <MediaCard
            key={music.idAlbum}
            title={music.strAlbum}
            count={index + 1}
            total={mediaList.length}
            image={music.strAlbumThumb}
            mediaId={music.idAlbum}
            mediaCat="musique"
          />
        ))
      ) : (
        <MediaCard
          title="Not Found"
          count={1}
          total={1}
          image={notFoundImg}
          mediaCat="musique"
        />
      )}
    </Carousel>
  );
};
