import axios from "axios";

const MOVIE_API = import.meta.env.VITE_MOVIE_API;

export const fetchMovies = (option, filters, setState) => {
  const BASE_URL = `https://api.themoviedb.org/3/${option}/movie?api_key=${MOVIE_API}&language=fr-FR`;

  let finalUrl = BASE_URL;

  if (filters.length) {
    const filtersQuery = filters.join("");
    finalUrl = `${BASE_URL}${filtersQuery}`;
  }

  axios
    .get(finalUrl)
    .then((response) => response.data)
    .then((data) => {
      setState(data.results);
    });
};

export const fetchMovieInfo = (movieId, setState) => {
  const BASE_URL = ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIE_API}&language=fr-FR`;

  axios
    .get(BASE_URL)
    .then((response) => response.data)
    .then((data) => {
      console.log("data: ", data);
      setState(data);
    });
};
