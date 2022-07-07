import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import A SUPPRIMER DANS LA VERSION FINALE
import DisplayPage from "@pages/DisplayPage/DisplayPage";
import { SearchPage } from "@pages/SearchPage/SearchPage";
import Home from "@pages/Home/Home";
import "./App.scss";
import { MovieContext } from "./context/MovieContext";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <Router>
        <div className="theme--music App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/display" element={<DisplayPage />} />
            <Route path="/go-sophia" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;
