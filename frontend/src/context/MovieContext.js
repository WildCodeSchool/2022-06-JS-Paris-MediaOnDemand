import { createContext, useContext } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
