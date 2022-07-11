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
  } = media;
  return (
    <div className="mediaCardInfo">
      <MediaCover
        url={albumImg || movieTrailer}
        isMovie={mediaCat === "film"}
      />
      <div className="mediaCardInfo__logo">
        <button type="button" onClick={() => navigate(-1)}>
          <ArrowIcon />
        </button>
        <PlusIcon />
        <img src={heartIcon} alt="favori" />
      </div>
      <div className="mediaCardInfo__info">{albumTitle || movieTitle}</div>
      <div className="mediaCardInfo__about">
        {albumDescriptionFR || albumDescriptionEN || movieDescription}
      </div>
    </div>
  );
};
