import React, { useState } from "react";
import {
  SearchInput,
  TabBar,
  SelectCheckBoxList,
  SelectCatList,
  Button,
} from "@components";
import "./SearchPage.scss";

const mediaCatSearch = [
  {
    mediaName: "Film",
    mediaSelectList: [
      {
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
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
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
    mediaSelectList: [
      {
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
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
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
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
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
    mediaSelectList: [
      {
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
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
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
        selectId: "genre-select",
        selectLabel: "Genre",
        defaultOption: "Choisis un Genre",
        selectOptions: [
          { value: "fiction", text: "Fiction" },
          { value: "action", text: "action" },
          { value: "romance", text: "Romance" },
        ],
      },
      {
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
  return (
    <div className="search-page">
      <div className="search-page__header">
        <SearchInput />
        <SelectCheckBoxList />
        <Button
          buttonSize="medium"
          buttonStyle="dark"
          onClick={() => setIsCatOpen(!isCatOpen)}
        >
          Catégories
        </Button>
      </div>
      <div className="search-page__select-list">
        {mediaCatSearch.map((mediaCat) => (
          <SelectCatList mediaCat={mediaCat} />
        ))}
      </div>
      <TabBar />
    </div>
  );
};
