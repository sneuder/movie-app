import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { guestSession, scrollBar } from "./utils/utils.js";

import Bar from "./components/bar/bar.jsx";
import Home from "./components/home/home.jsx";
import Favorites from "./components/favorites/favorites.jsx";
import Movie from "./components/movie/movie.jsx";

function App() {
  useEffect(() => {
    scrollBar()
  }, []);

  return (
    <BrowserRouter>
    <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
