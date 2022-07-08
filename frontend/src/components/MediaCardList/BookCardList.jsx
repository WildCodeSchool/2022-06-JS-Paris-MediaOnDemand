import React from "react";
import { MediaCard } from "@components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MediaCardList.scss";

export const BookCardList = ({ bookList }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={0}
    >
      {bookList &&
        bookList.map((book, index) => (
          <MediaCard
            key={book.id}
            title={book.title}
            count={index + 1}
            total={bookList.length}
            image={book.cover}
            mediaId={book.id}
            mediaCat="livre"
          />
        ))}
    </Carousel>
  );
};
