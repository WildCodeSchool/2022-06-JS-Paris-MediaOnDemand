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
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [mediasSelected, setMediasSelected] = useState([]);
  const [setFiltersSelected] = useState({
    book: [],
    music: [],
    movie: [],
  });
  return (
    <div className="search-page">
      <div className="search-page__header">
        <SearchInput />
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
