import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router /* , Routes, Route */,
} from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./App.scss";
import apiRequest from "@services/apiRequest/apiRequest";
import { MediaCard } from "./components";

function App() {
  const data =
    "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-01-01&primary_release_date.lte=2020-01-01&api_key=3a052e24d8c85855c7e02608574c300f";

  const [result, setResult] = useState({});

  useEffect(() => {
    apiRequest(data, setResult);
  }, []);

  return (
    <Router>
      <div className="theme--music App">
        {result.results && (
          <>
            {result.results.map((valeur, index) => (
              <MediaCard
                key={valeur.id}
                count={index + 1}
                total={result.results.length}
                title={valeur.title}
                categories={valeur.original_title}
                image={`https://image.tmdb.org/t/p/w500${valeur.poster_path}`}
              />
            ))}
          </>
        )}
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
