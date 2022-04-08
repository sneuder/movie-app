import React, { useEffect, useState } from "react";
import { getFavoriteMovies, removeFromFavorite } from "../../utils/utils.js";

import Card from "../card/card.jsx";

import style from "./favorites.module.scss";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getFavoriteMovies().then((data) => setFavorites(data));
  }, [favorites]);

  return (
    <div className={style.background}>
      <div className={style.grid}>
        {favorites?.map((movie) => (
          <div className={style.individualCard}>
            <Card movie={movie} />
            <button
              className={style.removeFavorite}
              onClick={() =>
                removeFromFavorite(movie.id).then((data) => setFavorites(data))
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
