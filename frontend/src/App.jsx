import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import A SUPPRIMER DANS LA VERSION FINALE
import DisplayPage from "@pages/DisplayPage/DisplayPage";
import SearchPage from "@pages/SearchPage/SearchPage";
import Home from "@pages/Home/Home";
import "./App.scss";
import MediaInfos from "@pages/MediaInfos/MediaInfos";
import UserPage from "@pages/UserPage/UserPage";
import LegalPage from "@pages/LegalPage/LegalPage";
import {
  FavoriteContext,
  MovieContext,
  MusicContext,
  BookContext,
  CartContext,
  ThemeContext,
  MediaSelectedContext,
  PurchaseContext,
} from "./context";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [music, setMusic] = useState([]);
  const [books, setBooks] = useState([]);
  const [theme, setTheme] = useState("");
  const [cart, setCart] = useState([]);
  const [mediasSelected, setMediasSelected] = useState([]);
  const [purchase, setPurchase] = useState([]);
  return (
    <PurchaseContext.Provider value={{ purchase, setPurchase }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
          <MovieContext.Provider value={{ movies, setMovies }}>
            <MusicContext.Provider value={{ music, setMusic }}>
              <BookContext.Provider value={{ books, setBooks }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <MediaSelectedContext.Provider
                    value={{ mediasSelected, setMediasSelected }}
                  >
                    <Router>
                      <div className={`App ${theme}`}>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/display" element={<DisplayPage />} />
                          <Route path="/go-sophia" element={<SearchPage />} />
                          <Route
                            path="/:mediaCat/:mediaId"
                            element={<MediaInfos />}
                          />
                          <Route path="/profile" element={<UserPage />} />
                          <Route path="/legal" element={<LegalPage />} />
                        </Routes>
                      </div>
                    </Router>
                  </MediaSelectedContext.Provider>
                </ThemeContext.Provider>
              </BookContext.Provider>
            </MusicContext.Provider>
          </MovieContext.Provider>
        </FavoriteContext.Provider>
      </CartContext.Provider>
    </PurchaseContext.Provider>
  );
}

export default App;
