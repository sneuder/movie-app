import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import style from "./bar.module.scss";

function Bar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const element = document.querySelector("#searchInput");
    element.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
      }
    })
  }, []);

  return (
    <div className={style.containerBar}>
      <div className={style.containerSearch}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search movie"
          onChange={(event) => setName(event.target.value)}
          id="searchInput"
        />
        <Link className={style.searchButton} to={`/search?name=${name}`} id="searchButton">
          Search
        </Link>
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
