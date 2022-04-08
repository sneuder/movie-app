import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.currentPath : style.containerFavorite
          }
        >
          <div>
            <FontAwesomeIcon icon={faHouse} className={style.icon} />
            Home
          </div>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? style.currentPath : style.containerFavorite
          }
        >
          <div>
            <FontAwesomeIcon icon={faHeart} className={style.icon} />
            Favorites
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Bar;
