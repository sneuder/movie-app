import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import style from "./bar.module.scss";

function Bar() {
  return (
    <div className={style.containerBar}>
      <div className={style.containerSearch}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search movie"
        />
        <input className={style.searchButton} type="submit" value="Search" />
      </div>
      <div className={style.buttonsGroup}>
        <Link to="/">
          <div className={style.containerFavorite}>
            <FontAwesomeIcon icon={faHouse} className={style.icon} />
            Home
          </div>
        </Link>

        <Link to="/favorites">
          <div className={style.containerFavorite}>
            <FontAwesomeIcon icon={faHeart} className={style.icon} />
            Favorites
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Bar;
