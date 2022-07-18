import BOOKS from "../../data/book.json";

export const fetchBooks = (inputValue, setState) => {
  const result = BOOKS.filter((book) =>
    book.bookTitle.toLowerCase().includes(inputValue)
  );
  setState(result);
};

export const fetchBooksSelect = (authorSelect, genreSelect, setState) => {
  const authorRegEx = new RegExp(authorSelect, "i");
  const result = BOOKS.filter(
    (book) =>
      (authorSelect ? book.author.match(authorRegEx) : true) &&
      (genreSelect ? book.genre.includes(genreSelect) : true)
  );
  setState(result);
};

export const fetchBookInfo = (id, setState) => {
  const result = BOOKS.filter((book) => book.id === id);
  setState(result[0]);
};
