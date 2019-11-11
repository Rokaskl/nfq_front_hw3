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
export const likeMovie = id => ({
  type: "likeMovie",
  id
});
export const unLikeMovie = id => ({
  type: "unLikeMovie",
  id
});
