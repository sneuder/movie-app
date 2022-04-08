import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails, getMovieReviews, addToFavorite, formattingAvatar } from "../../utils/utils.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./movie.module.scss";

function Movie() {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id).then((movie) => setMovie(movie));
    getMovieReviews(id).then((reviews) => setReviews(reviews));

    const favorite = document.querySelector("#favoriteIcon");
    favorite.addEventListener("click", () => {
      addToFavorite(id);
    });

  }, []);

  return (
    <div className={style.background}>
      <div className={style.backgroundPicture}>
        <img
          className={style.background}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
      </div>

      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className={style.containerInfo}>
          <h1 className={style.title}>{movie.title}</h1>
          <p className={style.overview}>{movie.overview}</p>

          <div className={style.containerFavorite}>
            <FontAwesomeIcon icon={faHeart} className={style.icon} id="favoriteIcon"/>
          </div>

          <ul className={style.list}>
            <li>{`Original language: ${movie.original_language}`}</li>
            <li>{`Release date: ${movie.release_date}`}</li>
            <li>{`Budge: $${movie.budget}`}</li>
            <li>{`Revenue: $${movie.revenue}`}</li>
          </ul>
        </div>
      </div>

      <div className={style.reviewsContainer}>
        {reviews &&
          reviews.map((r) => {
            const avatar = formattingAvatar(r.author_details.avatar_path);

            console.log(r);
            return (
              <div className={style.containerReview}>
                <img
                  className={style.avatar}
                  src={avatar}
                  alt=""
                />
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
