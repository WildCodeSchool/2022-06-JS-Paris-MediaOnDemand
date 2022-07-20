import React, { useState } from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const MusicCardList = ({ mediaList }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  // eslint-disable-next-line no-param-reassign
  if (mediaList === null) mediaList = [];

  if (windowWidth >= 1440) {
    if (mediaList.length === 0) {
      mediaList.push(
        { strAlbumThumb: notFoundImg, id: "null1" },
        { strAlbumThumb: notFoundImg, id: "null2" },
        { strAlbumThumb: notFoundImg, id: "null3" }
      );
    } else if (mediaList.length === 1) {
      mediaList.push(
        { strAlbumThumb: notFoundImg, id: "null1" },
        { strAlbumThumb: notFoundImg, id: "null2" }
      );
    } else if (mediaList.length === 2) {
      mediaList.push({ strAlbumThumb: notFoundImg, id: "null1" });
    }
  } else if (windowWidth >= 768) {
    if (mediaList.length === 0) {
      mediaList.push(
        { strAlbumThumb: notFoundImg, id: "null1" },
        { strAlbumThumb: notFoundImg, id: "null2" }
      );
    } else if (mediaList.length === 1) {
      mediaList.push({ strAlbumThumb: notFoundImg, id: "null1" });
    }
  } else if (windowWidth < 768) {
    if (mediaList.length === 0) {
      mediaList.push({ strAlbumThumb: notFoundImg, id: "null1" });
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
      {mediaList.map((music, index) => (
        <MediaCard
          key={music.idAlbum}
          title={music.strAlbum}
          count={index + 1}
          total={mediaList.length}
          image={music.strAlbumThumb}
          mediaId={music.idAlbum}
          mediaCat="musique"
        />
      ))}
    </AliceCarousel>
  );
};
