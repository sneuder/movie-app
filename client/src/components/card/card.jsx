import React from "react";
import { Link } from "react-router-dom";
import { scrollBar } from "../../utils/utils";
import style from "./card.module.scss";

function Card(props) {
  const { id, poster_path } = props.movie;
  return (
    <div className={style.containerPopularMovie}>
      <div className={style.containerImage}>
        <Link to={`/movie/${id}`} onClick={() => scrollBar()}>
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
