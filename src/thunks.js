import axios from "axios";
import { setMostPopularMovies, setGenres, setMoviesByGenre } from "./actions";
import { endpoints } from "./config";

export const getMostPopularMovies = () => dispatch => {
  axios.get(endpoints.mostPopularMovies()).then(data => {
    dispatch(setMostPopularMovies(data.data.results));
  });
};
export const getGenres = () => dispatch => {
  axios.get(endpoints.genres()).then(data => {
    dispatch(setGenres(data.data.genres));
  });
};
export const getMoviesByGenre = genre => dispatch => {
  axios.get(endpoints.genreMovies(genre.id)).then(data => {
    dispatch(setMoviesByGenre(genre.name, data.data.results));
  });
};
