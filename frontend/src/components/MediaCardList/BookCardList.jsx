import React, { useState } from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const BookCardList = ({ bookList }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth >= 1440) {
    if (bookList.length === 0) {
      bookList.push(
        { cover: notFoundImg, id: "null1" },
        { cover: notFoundImg, id: "null2" },
        { cover: notFoundImg, id: "null3" }
      );
    } else if (bookList.length === 1) {
      bookList.push(
        { cover: notFoundImg, id: "null1" },
        { cover: notFoundImg, id: "null2" }
      );
    } else if (bookList.length === 2) {
      bookList.push({ cover: notFoundImg, id: "null1" });
    }
  } else if (windowWidth >= 768) {
    if (bookList.length === 0) {
      bookList.push(
        { cover: notFoundImg, id: "null1" },
        { cover: notFoundImg, id: "null2" }
      );
    } else if (bookList.length === 1) {
      bookList.push({ cover: notFoundImg, id: "null1" });
    }
  } else if (windowWidth < 768) {
    if (bookList.length === 0) {
      bookList.push({ cover: notFoundImg, id: "null1" });
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
      {bookList.map((book, index) => (
        <MediaCard
          key={book.id}
          title={book.bookTitle}
          count={index + 1}
          total={bookList.length}
          image={book.cover}
          mediaId={book.id}
          mediaCat="livre"
        />
      ))}
    </AliceCarousel>
  );
};
