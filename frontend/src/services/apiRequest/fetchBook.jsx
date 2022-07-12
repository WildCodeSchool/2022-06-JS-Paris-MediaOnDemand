import BOOKS from "../../data/book.json";

export const fetchBooks = (inputValue, setState) => {
  const result = BOOKS.filter((book) =>
    book.strTitle.toLowerCase().includes(inputValue)
  );
  setState(result);
};

export const fetchBookInfo = (id, setState) => {
  const result = BOOKS.filter((book) => book.id === id);
  setState(result[0]);
};
