export const toggleCards = shouldShow => ({
  type: "toggleCards",
  shouldShow
});

export const setMostPopularMovies = list => ({
  type: "setMostPopularMovies",
  list
});

export const setGenres = list => ({
  type: "setGenres",
  list
});

export const setMoviesByGenre = (genre, list) => ({
  type: "setMoviesByGenre",
  genre,
  list
});
export const likeMovie = (id, title) => ({
  type: "likeMovie",
  id,
  title
});
export const unLikeMovie = (id, title) => ({
  type: "unLikeMovie",
  id,
  title
});
