import { combineReducers } from "redux";

const initialState = {
  showCards: true
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case "toggleCards":
      return {
        ...state,
        showCards: action.shouldShow
      };
    default:
      return state;
  }
};

const initialStateOfCards = {
  genres: [],
  movies: [],
  currentType: "",
  likedMovies: []
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case "setMostPopularMovies":
      return {
        ...state,
        movies: action.list,
        currentType: "Most Popular"
      };
    case "setGenres":
      return {
        ...state,
        genres: action.list
      };
    case "setMoviesByGenre":
      return {
        ...state,
        movies: action.list,
        currentType: action.genre
      };
    case "likeMovie":
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.id]
      };
    case "unLikeMovie":
      var temp = state.likedMovies.filter(e => e !== action.id);
      return {
        ...state,
        likedMovies: temp
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  cards
});
