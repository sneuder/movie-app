import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getMovieDetails,
  getMovieReviews,
  addToFavorite,
  formattingAvatar,
} from "../../utils/utils.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./movie.module.scss";

function Movie() {
  const [movie, setMovie] = useState();
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id).then((movie) => {
      getMovieReviews(id).then((reviews) => {
        setMovie({
          film: movie,
          reviews: reviews,
        });
      });
    });

    const favorite = document.querySelector("#favoriteIcon");
    favorite.addEventListener("click", () => {
      addToFavorite(id);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.background}>
      <div className={style.backgroundPicture}>
        <img
          className={style.background}
          src={movie && `https://image.tmdb.org/t/p/w500${movie?.film.backdrop_path}`}
          alt=""
        />
      </div>

      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            className={style.image}
            src={movie && `https://image.tmdb.org/t/p/w500${movie?.film.poster_path}`}
            alt=""
          />
        </div>

        <div className={style.containerInfo}>
          <h1 className={style.title}>{movie?.film.title}</h1>
          <p className={style.overview}>{movie?.film.overview}</p>

          <div className={style.containerFavorite}>
            <FontAwesomeIcon
              icon={faHeart}
              className={style.icon}
              id="favoriteIcon"
            />
          </div>

          <ul className={style.list}>
            <li>{`Original language: ${movie?.film.original_language}`}</li>
            <li>{`Release date: ${movie?.film.release_date}`}</li>
            <li>{`Budge: $${movie?.film.budget}`}</li>
            <li>{`Revenue: $${movie?.film.revenue}`}</li>
          </ul>
        </div>
      </div>

      <div className={style.reviewsContainer}>
        {movie?.reviews &&
          movie.reviews.map((r) => {
            const avatar = formattingAvatar(r.author_details.avatar_path);
            return (
              <div
                key={r.author_details.username}
                className={style.containerReview}
              >
                <img className={style.avatar} src={avatar} alt="" />
                <div className={style.reviewContent}>
                  <p className={style.username}>{r.author_details.username}</p>
                  <p className={style.rating}>{`Rating: ${
                    r.author_details.rating || `no rating`
                  }`}</p>
                  <p className={style.textReview}>{r.content}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movie;
