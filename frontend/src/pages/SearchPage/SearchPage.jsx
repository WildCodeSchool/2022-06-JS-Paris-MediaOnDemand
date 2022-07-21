import React, { useState, useEffect } from "react";

import {
  SearchInput,
  TabBar,
  SelectCheckBoxList,
  SelectCatList,
  Button,
} from "@components";
import "./SearchPage.scss";
import { fetchMovies } from "@services/apiRequest/fetchMovie";
import { fetchMusic } from "@services/apiRequest/fetchMusic";
import { fetchBooks, fetchBooksSelect } from "@services/apiRequest/fetchBook";
import { isMediaSelected } from "@tools/utils";
import { useNavigate } from "react-router-dom";
import {
  useMovieContext,
  useMusicContext,
  useBookContext,
  useThemeContext,
  useMediaSelectedContext,
} from "@context";
import { mediaCatSearch } from "@data/mediaSelect";

export const SearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isCatOpen, setIsCatOpen] = useState(false);

  const [filtersSelected, setFiltersSelected] = useState({
    book: [],
    music: [],
    movie: [],
  });

  const { setBooks } = useBookContext();
  const { setMovies } = useMovieContext();
  const { setMusic } = useMusicContext();
  const { setTheme } = useThemeContext();
  const { mediasSelected, setMediasSelected } = useMediaSelectedContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTheme("");
  }, []);

  const handleFetchMovie = () => {
    const option = searchInputValue ? "search" : "discover";
    const searchQuery = searchInputValue ? `&query=${searchInputValue}` : null;
    if (isMediaSelected(mediasSelected, "movie")) {
      fetchMovies(option, [searchQuery], setMovies);
    } else {
      setMovies([]);
    }
  };

  const handleFetchMovieSelect = () => {
    const option = "discover";
    const searchQuery = filtersSelected.movie.reduce(
      (acc, select) => acc + select.value,
      ""
    );
    if (isMediaSelected(mediasSelected, "movie")) {
      fetchMovies(option, [searchQuery], setMovies);
    } else {
      setMovies([]);
    }
  };

  const handleFetchBook = () => {
    if (isMediaSelected(mediasSelected, "book")) {
      fetchBooks(searchInputValue, setBooks);
    } else {
      setBooks([]);
    }
  };

  const handleFetchBookSelect = () => {
    const authorSelect = filtersSelected.book.filter(
      (select) => select.name === "author-select"
    )[0]?.value;
    const genreSelect = filtersSelected.book.filter(
      (select) => select.name === "genre-select"
    )[0]?.value;

    if (isMediaSelected(mediasSelected, "book")) {
      fetchBooksSelect(authorSelect, genreSelect, setBooks);
    } else {
      setBooks([]);
    }
  };

  const handleFetchMusic = () => {
    if (isMediaSelected(mediasSelected, "music")) {
      fetchMusic(searchInputValue, setMusic);
    } else {
      setMusic([]);
    }
  };

  const handleFetchMediaInput = (e) => {
    e.preventDefault();
    handleFetchMovie();
    handleFetchBook();
    handleFetchMusic();
    navigate("../display", { replace: true });
  };

  const handleFetchMediaSelect = (e) => {
    e.preventDefault();
    handleFetchMovieSelect();
    handleFetchBookSelect();
    navigate("../display", { replace: true });
  };

  return (
    <div className="search-page">
      <div className="search-page__section">
        <div className="search-page__header">
          <SearchInput
            searchValue={searchInputValue}
            onChange={setSearchInputValue}
            handleSubmit={handleFetchMediaInput}
          />
          <SelectCheckBoxList setMediasSelected={setMediasSelected} />
          <Button
            buttonSize="medium"
            buttonStyle="dark"
            onClick={() => setIsCatOpen(!isCatOpen)}
          >
            Catégories
          </Button>
        </div>
        {isCatOpen &&
          (isMediaSelected(mediasSelected, "movie") ||
            isMediaSelected(mediasSelected, "book")) && (
            <div className="search-page__select-list">
              {mediaCatSearch.map(
                (mediaCat) =>
                  mediasSelected.includes(mediaCat.mediaCatName) && (
                    <SelectCatList
                      key={mediaCat.mediaName}
                      mediaCat={mediaCat}
                      setFiltersSelected={setFiltersSelected}
                    />
                  )
              )}

              <Button
                buttonSize="large"
                buttonStyle="dark"
                onClick={(e) => handleFetchMediaSelect(e)}
              >
                Go !
              </Button>
            </div>
          )}
      </div>

      <TabBar />
    </div>
  );
};
