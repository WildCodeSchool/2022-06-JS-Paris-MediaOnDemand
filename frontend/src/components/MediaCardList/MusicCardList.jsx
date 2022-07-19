import React from "react";
import { MediaCard } from "@components";
import { Carousel } from "react-responsive-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MediaCardList.scss";

export const MusicCardList = ({ mediaList }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={0}
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
