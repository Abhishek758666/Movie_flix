import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Tvshows from "./pages/Tvshows";
import People from "./pages/People";

const App = () => {
  return (
    <div className="bg-[#1f1e24] text-white w-full min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/tv shows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
};

export default App;
