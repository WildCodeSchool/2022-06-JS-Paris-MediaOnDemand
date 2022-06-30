import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchPage } from "@pages/SearchPage/SearchPage";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="theme--movie App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/go-sophia" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
