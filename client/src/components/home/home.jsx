import React from "react";
import { useEffect, useState } from "react";

import { getPopularMovies } from "../../utils/utils.js";

import Card from "../card/card.jsx";
import style from "./home.module.scss";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then((result) => setPopularMovies(result));
  }, []);

  return (
    <div className={style.background}>
      <div className={style.containerPopularMovies}>
        {popularMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
