const { Router } = require("express");

const axios = require("axios");
const router = Router();

const API_KEY = "3bcb5ffb4b0a0b285f5664ce66d75194";
const SESSION_ID = "34df3f32562c0be9f5cb7ea3a94169121dcfefc2";

// Creation a guest session is not enough to make a request to the API for favorite movies.
router.get("/authentication/guest_session/new", async (req, res) => {
  const guest = await axios(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`
  );
  res.json(guest.data);
});

// Get popular movies
router.get("/movie/popular", async (req, res) => {
  try {
    const popularMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.json(popularMovies.data);
  } catch (e) {
    console.log(e);
  }
});

// Get movie detail
router.get("/movie/:movie_id", async (req, res) => {
  try {
    const movie_id = req.params.movie_id;
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    res.json(movie.data);
  } catch (e) {
    console.log(e);
  }
});

// Get review movie
router.get("/movie/:movie_id/reviews", async (req, res) => {
  try {
    const movie_id = req.params.movie_id;
    const movieReviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.json(movieReviews.data);
  } catch (e) {
    console.log(e);
  }
});

// Make a movie favorite
router.post("/account/favorite", async (req, res) => {
  try {
    const favorite = req.body;
    await axios.post(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id=${SESSION_ID}`,
      favorite
    );

    res.json("Added to favorite");
  } catch (e) {
    console.log(e);
  }
});

// Get favorite movies
router.get("/account/favorite/movies", async (req, res) => {
  try {
    const favoriteMovies = await axios.get(`
    https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&sort_by=created_at.asc&page=1`);

    res.json(favoriteMovies.data.results);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
