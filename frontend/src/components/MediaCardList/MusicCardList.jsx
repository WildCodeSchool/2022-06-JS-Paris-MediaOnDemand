import React from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const MusicCardList = ({ mediaList }) => {
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
    </AliceCarousel>
  );
};
