import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaCover } from "@components";
import "./MediaCardInfo.scss";
import { ArrowIcon, HeartIcon, PlusIcon } from "@assets/iconsCard";
import { fetchMovieTrailer } from "@services/apiRequest/fetchMovie";
import { useCartContext, useFavoriteContext } from "../../context";

export const MediaCardInfo = ({ media }) => {
  const { mediaCat } = useParams();
  const { cart, setCart } = useCartContext();
  const { favorites, setFavorites } = useFavoriteContext();

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

  const handleAddToCart = (e) => {
    e.preventDefault();
    let isArticle = false;
    cart.map((item) => {
      if (item.articleId === media.id) {
        isArticle = true;
      }
      return isArticle;
    });
    if (!isArticle) {
      setCart([
        ...cart,
        {
          articleTitle: albumTitle || movieTitle || bookTitle,
          articleId: media.id,
          path: mediaCat,
          articleImage: urlMediaCover,
        },
      ]);
    }
  };

  const addStorage = () => {
    let isFavorite = false;
    favorites.map((item) => {
      if (item.favId === media.id) {
        isFavorite = true;
      }
      return isFavorite;
    });
    if (!isFavorite) {
      setFavorites([
        ...favorites,
        {
          favId: media.id,
          favTitle: albumTitle || movieTitle || bookTitle,
          path: mediaCat,
          articleImage: urlMediaCover,
        },
      ]);
    }
  };

  return (
    <div className="mediaCardInfo">
      <div className="mediaCardInfo__top">
        <MediaCover url={urlMediaCover} isMovie={mediaCat === "film"} />
        <div className="mediaCardInfo__logo">
          <button type="button" onClick={() => navigate(-1)}>
            <ArrowIcon />
          </button>
          <PlusIcon
            width="48px"
            height="48px"
            onClick={(e) => handleAddToCart(e)}
          />
          <HeartIcon onClick={() => addStorage()} />
        </div>
        <div className="mediaCardInfo__info">
          <h2>{albumTitle || movieTitle || bookTitle}</h2>
        </div>
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
