import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SearchPage from "@pages/SearchPage";
// import Home from "./pages/Home/Home";
import "./App.scss";
import MediaInfos from "@pages/MediaInfos/MediaInfos";

function App() {
  return (
    <Router>
      <div className="theme--music App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/go-sophia" element={<SearchPage />} /> */}
          <Route path="/" element={<MediaInfos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
