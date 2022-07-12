import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaCover } from "@components";
import "./MediaCardInfo.scss";
import { ArrowIcon, PlusIcon } from "@assets/iconsCard";
import heartIcon from "@assets/heartIcon.svg";
import { fetchMovieTrailer } from "@services/apiRequest/fetchMovie";

export const MediaCardInfo = ({ media }) => {
  const { mediaCat } = useParams();

  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    if (mediaCat === "film") fetchMovieTrailer(media.id, setMovieTrailer);
  }, [mediaCat]);
  const navigate = useNavigate();
  const {
    strAlbum: albumTitle,
    strAlbumThumb: albumImg,
    strDescriptionFR: albumDescriptionFR,
    strDescriptionEN: albumDescriptionEN,
    title: movieTitle,
    // strTitle: bookTitle,
    // description: bookDescription,
    overview: movieDescription,
    // cover: bookImg,
  } = media;

  // const urlMediaCover = mediaCat === "film" ? movieTrailer : albumImg;
  let urlMediaCover = "";
  if (mediaCat === "film") {
    urlMediaCover = movieTrailer;
  } else if (mediaCat === "livre") {
    urlMediaCover = media.cover;
  } else {
    urlMediaCover = albumImg;
  }

  return (
    <div className="mediaCardInfo">
      <MediaCover url={urlMediaCover} isMovie={mediaCat === "film"} />
      <div className="mediaCardInfo__logo">
        <button type="button" onClick={() => navigate(-1)}>
          <ArrowIcon />
        </button>
        <PlusIcon />
        <img src={heartIcon} alt="favori" />
      </div>
      <div className="mediaCardInfo__info">
        <h2>{albumTitle || movieTitle || media.strTitle}</h2>
      </div>
      <div className="mediaCardInfo__about">
        <p>
          {albumDescriptionFR ||
            albumDescriptionEN ||
            movieDescription ||
            media.description}
        </p>
      </div>
    </div>
  );
};
