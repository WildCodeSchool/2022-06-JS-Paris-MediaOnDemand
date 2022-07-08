import { createContext, useContext } from "react";

export const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);
