import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Tvshows from "./pages/Tvshows";
import People from "./pages/People";
import PersonDetails from "./components/PersonDetails";
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <div className="bg-[#1f1e24] text-white w-full min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/details/:id" element={<MovieDetails />} />

        <Route path="/tv shows" element={<Tvshows />} />
        <Route path="/tv shows/details/:id" element={<TvDetails />} />

        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;

// bg 1f1e24
// main 6556cd
