import React, { useState } from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const MusicCardList = ({ musicList }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth >= 1440) {
    if (musicList?.length === 0) {
      musicList.push(
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null1" },
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null2" },
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null3" }
      );
    } else if (musicList?.length === 1) {
      musicList.push(
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null1" },
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null2" }
      );
    } else if (musicList?.length === 2) {
      musicList.push({
        strAlbumThumb: notFoundImg,
        notFound: true,
        idAlbum: "null1",
      });
    }
  } else if (windowWidth >= 768) {
    if (musicList?.length === 0) {
      musicList.push(
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null1" },
        { strAlbumThumb: notFoundImg, notFound: true, idAlbum: "null2" }
      );
    } else if (musicList?.length === 1) {
      musicList.push({
        strAlbumThumb: notFoundImg,
        notFound: true,
        idAlbum: "null1",
      });
    }
  } else if (windowWidth < 768) {
    if (musicList?.length === 0) {
      musicList.push({
        strAlbumThumb: notFoundImg,
        notFound: true,
        idAlbum: "null1",
      });
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
      touchMoveDefaultEvents
    >
      {musicList.map((music, index) => (
        <MediaCard
          key={music.idAlbum}
          title={music.strAlbum}
          count={index + 1}
          total={musicList.length}
          image={music.strAlbumThumb}
          mediaId={music.idAlbum}
          mediaCat="musique"
          isNotFound={music.notFound}
        />
      ))}
    </AliceCarousel>
  );
};
