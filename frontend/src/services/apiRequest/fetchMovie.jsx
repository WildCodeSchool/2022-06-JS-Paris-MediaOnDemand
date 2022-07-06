import axios from "axios";

// const MOVIE_API = import.meta.env.VITE_MOVIE_API;
// const baseUrl = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-01-01&primary_release_date.lte=2020-01-01&api_key=${MOVIE_API}`;

export const fetchMovie = (url, setState) => {
  axios
    .get(`${url}`)
    .then((response) => response.data)
    .then((data) => {
      setState(data);
    });
};
