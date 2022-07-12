import { createContext, useContext } from "react";

export const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);
