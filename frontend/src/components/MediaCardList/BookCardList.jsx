import React from "react";
import { MediaCard } from "@components";
import AliceCarousel from "react-alice-carousel";
import notFoundImg from "@assets/media_non_trouve.svg";
import "./MediaCardList.scss";

export const BookCardList = ({ bookList }) => {
  if (bookList.length === 0) {
    bookList.push(
      { cover: notFoundImg },
      { cover: notFoundImg },
      { cover: notFoundImg }
    );
  } else if (bookList.length === 1) {
    bookList.push({ cover: notFoundImg }, { cover: notFoundImg });
  } else if (bookList.length === 2) {
    bookList.push({ cover: notFoundImg });
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
      {bookList ? (
        bookList.map((book, index) => (
          <MediaCard
            key={book.id}
            title={book.bookTitle}
            count={index + 1}
            total={bookList.length}
            image={book.cover}
            mediaId={book.id}
            mediaCat="livre"
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
