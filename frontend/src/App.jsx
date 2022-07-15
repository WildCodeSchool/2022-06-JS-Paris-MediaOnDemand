import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import A SUPPRIMER DANS LA VERSION FINALE
import DisplayPage from "@pages/DisplayPage/DisplayPage";
import { SearchPage } from "@pages/SearchPage/SearchPage";
import Home from "@pages/Home/Home";
import "./App.scss";
import MediaInfos from "@pages/MediaInfos/MediaInfos";
import {
  MovieContext,
  MusicContext,
  BookContext,
  CartContext,
  MediaSelectedContext,
} from "./context";

function App() {
  const [movies, setMovies] = useState([]);
  const [music, setMusic] = useState([]);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [mediasSelected, setMediasSelected] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <MusicContext.Provider value={{ music, setMusic }}>
          <BookContext.Provider value={{ books, setBooks }}>
            <MediaSelectedContext.Provider
              value={{ mediasSelected, setMediasSelected }}
            >
              <Router>
                <div className="theme--music App">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/display" element={<DisplayPage />} />
                    <Route path="/go-sophia" element={<SearchPage />} />
                    <Route
                      path="/:mediaCat/:mediaId"
                      element={<MediaInfos />}
                    />
                  </Routes>
                </div>
              </Router>
            </MediaSelectedContext.Provider>
          </BookContext.Provider>
        </MusicContext.Provider>
      </MovieContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
