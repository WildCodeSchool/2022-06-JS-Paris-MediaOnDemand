import { createContext, useContext } from "react";

export const FavContext = createContext();

export const useFavContext = () => useContext(FavContext);
