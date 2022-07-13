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
    overview: movieDescription,
    bookTitle,
    description: bookDescription,
    cover: bookImg,
  } = media;

  let urlMediaCover = "";
  if (mediaCat === "film") {
    urlMediaCover = movieTrailer;
  } else if (mediaCat === "livre") {
    urlMediaCover = bookImg;
  } else {
    urlMediaCover = albumImg;
  }

  return (
    <div className="mediaCardInfo">
<<<<<<< HEAD
      <MediaCover url={urlMediaCover} isMovie={mediaCat === "film"} />
      <div className="mediaCardInfo__logo">
        <button type="button" onClick={() => navigate(-1)}>
          <ArrowIcon />
        </button>
        <PlusIcon />
        <img src={heartIcon} alt="favori" />
      </div>
      <div className="mediaCardInfo__info">
        <h2>{albumTitle || movieTitle || bookTitle}</h2>
=======
      <div className="mediaCardInfo__top">
        <MediaCover url={urlMediaCover} isMovie={mediaCat === "film"} />
        <div className="mediaCardInfo__logo">
          <button type="button" onClick={() => navigate(-1)}>
            <ArrowIcon />
          </button>
          <PlusIcon />
          <img src={heartIcon} alt="favori" />
        </div>
        <div className="mediaCardInfo__info">
          <h2>{albumTitle || movieTitle}</h2>
        </div>
>>>>>>> develop
      </div>
      <div className="mediaCardInfo__about">
        <p>
          {albumDescriptionFR ||
            albumDescriptionEN ||
            movieDescription ||
            bookDescription}
        </p>
      </div>
    </div>
  );
};
