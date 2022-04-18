import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../card/card";
import { searchingMovies } from "../../utils/utils";

import style from "./foundMovies.module.scss";

function FoundMovies() {
  const [name] = useSearchParams();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const query = name.get("name");
    searchingMovies(query).then((result) => setMovies(result));
  });

  return (
    <div className={style.background}>
      <div className={style.containerPopularMovies}>
      {movies.map((movie) => {
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

export default FoundMovies;
