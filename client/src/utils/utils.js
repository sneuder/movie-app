import axios from "axios";

export async function getPopularMovies() {
  const getPopularMovies = await axios.get(
    "http://localhost:3001/movie/popular"
  );
  return getPopularMovies.data.results;
}

export async function getMovieDetails(id) {
  const getMovieDetails = await axios.get(`http://localhost:3001/movie/${id}`);
  return getMovieDetails.data;
}

export async function getMovieReviews(id) {
  const getMovieReviews = await axios.get(
    `http://localhost:3001/movie/${id}/reviews`
  );
  return getMovieReviews.data.results;
}

export async function addToFavorite(id) {
  const favorite = {
    media_type: "movie",
    media_id: id,
    favorite: true,
  };

  const addToFavorite = await axios.post(
    `http://localhost:3001/account/favorite`,
    favorite
  );
  return addToFavorite.data;
}

export async function removeFromFavorite(id) {
  const noFavorite = {
    media_type: "movie",
    media_id: id,
    favorite: false,
  };

  const filteredMovies = await axios.post(
    `http://localhost:3001/account/favorite`,
    noFavorite
  );

  const getFavoriteMovies = await axios.get(
    `http://localhost:3001/account/favorite/movies`
  );
  return getFavoriteMovies.data;
}

export async function getFavoriteMovies() {
  const getFavoriteMovies = await axios.get(
    `http://localhost:3001/account/favorite/movies`
  );
  return getFavoriteMovies.data;
}

// export async function guestSession() {
//   if (window.localStorage.getItem("guest_session_id") !== null) return;
//   const guest = await axios(
//     `http://localhost:3001/authentication/guest_session/new`
//   );

//   window.localStorage.setItem(
//     "guest_session_id",
//     JSON.stringify(guest.data.guest_session_id)
//   );
// }

export function formattingAvatar(avatar) {
  if (avatar === null || avatar === undefined)
    return "https://i.pinimg.com/564x/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg";

  if (!avatar.includes("https://"))
    return `https://image.tmdb.org/t/p/w500${avatar}`;

  if (avatar.includes("/https://")) {
    if (avatar.startsWith("/")) {
      avatar = avatar.substring(1, avatar.length - 1);
      return avatar;
    }

    return avatar;
  }
}

export function scrollBar() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
