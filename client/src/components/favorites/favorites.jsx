import React, { useEffect, useState } from "react";
import { getFavoriteMovies, removeFromFavorite, scrollBar } from "../../utils/utils.js";

import Card from "../card/card.jsx";
import swal from 'sweetalert';

import style from "./favorites.module.scss";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    scrollBar();
    getFavoriteMovies().then((data) => setFavorites([...data]));
  }, []);

  return (
    <div className={style.background}>
      <div className={style.grid}>
        {favorites?.map((movie) => (
          <div key={movie.id} className={style.individualCard}>
            <Card movie={movie} />
            <button
              className={style.removeFavorite}
              onClick={() =>
                removeFromFavorite(movie.id).then((data) => {
                  swal("Movie removed from favorites!", "Click the button to continue", "success");
                  setFavorites([...data]);
                })
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
