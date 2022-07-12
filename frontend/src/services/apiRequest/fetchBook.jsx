import BOOKS from "../../data/book.json";

export const fetchBooks = (inputValue, setState) => {
  const result = BOOKS.filter((book) =>
    book.bookTitle.toLowerCase().includes(inputValue)
  );
  setState(result);
};

export const fetchBookInfo = (id, setState) => {
  const result = BOOKS.filter((book) => book.id === id);
  setState(result[0]);
};
