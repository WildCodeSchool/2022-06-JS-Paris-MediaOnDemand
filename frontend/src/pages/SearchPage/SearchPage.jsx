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
import { fetchMovie } from "@services/apiRequest/fetchMovie";
import { fetchMusic } from "@services/apiRequest/fetchMusic";
import { useNavigate } from "react-router-dom";
import { useMovieContext, useMusicContext } from "../../context";

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
          { value: 1990, text: "1990" },
          { value: 2000, text: "2000" },
          { value: 2010, text: "2010" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "Action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "pay-select",
        selectLabel: "Pays",
        defaultOption: "Choisis un Pays",
        selectOptions: [
          { value: "france", text: "France" },
          { value: "espagne", text: "Espagne" },
          { value: "japon", text: "Japon" },
        ],
      },
    ],
  },
  {
    mediaName: "Musique",
    mediaCatName: "music",
    mediaSelectList: [
      {
        uuidSelect: uuidv4(),
        selectId: "annee-select",
        selectLabel: "Année",
        defaultOption: "Choisis une Année",
        selectOptions: [
          { value: 1990, text: "1990" },
          { value: 2000, text: "2000" },
          { value: 2010, text: "2010" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "Action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "pay-select",
        selectLabel: "Pays",
        defaultOption: "Choisis un Pays",
        selectOptions: [
          { value: "france", text: "France" },
          { value: "espagne", text: "Espagne" },
          { value: "japon", text: "Japon" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "Action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "pay-select",
        selectLabel: "Pays",
        defaultOption: "Choisis un Pays",
        selectOptions: [
          { value: "france", text: "France" },
          { value: "espagne", text: "Espagne" },
          { value: "japon", text: "Japon" },
        ],
      },
    ],
  },
  {
    mediaName: "Livre",
    mediaCatName: "book",
    mediaSelectList: [
      {
        uuidSelect: uuidv4(),
        selectId: "annee-select",
        selectLabel: "Année",
        defaultOption: "Choisis une Année",
        selectOptions: [
          { value: 1990, text: "1990" },
          { value: 2000, text: "2000" },
          { value: 2010, text: "2010" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "Action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "pay-select",
        selectLabel: "Pays",
        defaultOption: "Choisis un Pays",
        selectOptions: [
          { value: "france", text: "France" },
          { value: "espagne", text: "Espagne" },
          { value: "japon", text: "Japon" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "Action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
        uuidSelect: uuidv4(),
        selectId: "pay-select",
        selectLabel: "Pays",
        defaultOption: "Choisis un Pays",
        selectOptions: [
          { value: "france", text: "France" },
          { value: "espagne", text: "Espagne" },
          { value: "japon", text: "Japon" },
        ],
      },
    ],
  },
];

export const SearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [mediasSelected, setMediasSelected] = useState([]);
  const [setFiltersSelected] = useState({
    book: [],
    music: [],
    movie: [],
  });
  const isMediaSelected = (mediaName) => {
    return mediasSelected.includes(mediaName);
  };

  const { setMovies } = useMovieContext();
  const { setMusic } = useMusicContext();
  const navigate = useNavigate();

  const handleFetchMovie = () => {
    const option = searchInputValue ? "search" : "discover";
    const searchQuery = searchInputValue ? `&query=${searchInputValue}` : null;
    if (isMediaSelected("movie")) {
      fetchMovie(option, [searchQuery], setMovies);
    } else {
      setMovies([]);
    }
  };

  const handleFetchMusic = () => {
    if (isMediaSelected("music")) {
      fetchMusic(searchInputValue, setMusic);
    } else {
      setMusic([]);
    }
  };

  const handleFetchMediaInput = (e) => {
    e.preventDefault();
    handleFetchMovie();
    handleFetchMusic();
    navigate("../display", { replace: true });
  };

  return (
    <div className="search-page">
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
      {isCatOpen && (
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
        </div>
      )}
      <TabBar />
    </div>
  );
};
