import React from "react";
import { useEffect, useState } from "react";

import { getPopularMovies } from "../../utils/utils.js";

import Card from "../card/card.jsx";
import Loader from "../loader/loader.jsx";

import style from "./home.module.scss";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then((result) => setPopularMovies([...result]));
  }, []);

  if(popularMovies.length === 0) return <Loader />;

  return (
    <div className={style.background}>
      <div className={style.containerPopularMovies}>
        {popularMovies.map((movie) => {
          if (movie.poster_path) {
            return (
              <Card
                key={movie.id}
                movie={movie}
                className={style.containerPopularMovie}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Home;
