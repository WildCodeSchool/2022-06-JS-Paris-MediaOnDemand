import BOOKS from "../../data/book.json";

export const fetchBooks = (inputValue, setState) => {
  const result = BOOKS.filter((book) =>
    book.strTitle.toLowerCase().includes(inputValue)
  );
  setState(result);
};
