import { createContext, useContext } from "react";

export const MediaSelectedContext = createContext();

export const useMediaSelectedContext = () => useContext(MediaSelectedContext);
