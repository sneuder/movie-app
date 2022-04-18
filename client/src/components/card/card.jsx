import React from "react";
import { Link } from "react-router-dom";
import { scrollBar } from "../../utils/utils";
import style from "./card.module.scss";

function Card(props) {
  const { id, poster_path } = props.movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6";
  return (
    <div className={style.containerPopularMovie}>
      <div className={style.containerImage}>
        <Link to={`/movie/${id}`} onClick={() => scrollBar()}>
          <img
            className={style.image}
            src={image}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
