import { v4 as uuidv4 } from "uuid";
import MOVIEGENRES from "@data/movieCat.json";
import BOOKGENRES from "@data/bookCat.json";

export const mediaCatSearch = [
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
        selectOptions: MOVIEGENRES.map((genre) => {
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
        selectOptions: BOOKGENRES.map((genre) => {
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
