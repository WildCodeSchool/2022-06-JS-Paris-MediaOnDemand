import BOOKS from "../../data/book.json";

export const fetchBooks = (inputValue, setState) => {
  const result = BOOKS.filter((book) =>
    book.title.toLowerCase().includes(inputValue)
  );
  setState(result);
};
