import React, { useState } from "react";
import {
  SearchInput,
  TabBar,
  SelectCheckBoxList,
  SelectCatList,
  Button,
} from "@components";
import "./SearchPage.scss";
import { v4 as uuidv4 } from "uuid";
import { fetchMovies } from "@services/apiRequest/fetchMovie";
import { fetchMusic } from "@services/apiRequest/fetchMusic";
import { fetchBooks, fetchBooksSelect } from "@services/apiRequest/fetchBook";
import { isMediaSelected } from "@tools/utils";
import { useNavigate } from "react-router-dom";
import {
  useMovieContext,
  useMusicContext,
  useBookContext,
  useMediaSelectedContext,
} from "@context";

const bookGenres = [
  { value: "fantastic", text: "Fantastic" },
  { value: "family", text: "Famille" },
  { value: "action", text: "Action" },
  { value: "horror", text: "Horreur" },
  { value: "drama", text: "Drame" },
  { value: "polar", text: "Polar" },
  { value: "thriller", text: "Thriller" },
  { value: "post-apocalyptic", text: "Post-Apocalyptique" },
  { value: "comedy", text: "Comedie" },
  { value: "adventure", text: "Aventure" },
  { value: "historic", text: "Historique" },
];

const movieGenres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const mediaCatSearch = [
  {
    mediaName: "Film",
    mediaCatName: "movie",
    mediaSelectList: [
      {
        uuidSelect: uuidv4(),
        selectId: "annee-select",
        selectLabel: "Année",
        defaultOption: "Choisis une Année",
        selectOptions: [
          { value: "&primary_release_date.lte=1979-12-31", text: "Avant 1980" },
          {
            value:
              "&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31",
            text: "Entre 1980 et 1990",
          },
          {
            value:
              "&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31",
            text: "Entre 1990 et 2000",
          },
          {
            value:
              "&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31",
            text: "Entre 2000 et 2010",
          },
          {
            value:
              "&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31",
            text: "Entre 2010 et 2020",
          },
          {
            value: "&primary_release_date.gte=2020-01-01",
            text: "A partir de 2020",
          },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: movieGenres.map((genre) => {
          return { value: `&with_genres=${genre.id}`, text: genre.name };
        }),
      },
    ],
  },

  // ?Book
  {
    mediaName: "Livre",
    mediaCatName: "book",
    mediaSelectList: [
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: bookGenres.map((genre) => {
          return { value: genre.value, text: genre.text };
        }),
      },
      {
        uuidSelect: uuidv4(),
        selectId: "author-select",
        selectLabel: "Auteur",
        defaultOption: "Choisis un Auteur",
      },
    ],
  },
];

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
  const { mediasSelected, setMediasSelected } = useMediaSelectedContext();
  const navigate = useNavigate();

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
