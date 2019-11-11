import React from "react";
import { connect } from "react-redux";
import { toggleCards } from "../actions";
import { getMostPopularMovies, getGenres, getMoviesByGenre } from "../thunks";
import Card from "./Card";
import { getImageUrl } from "../config";

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMostPopularMovies();
    this.props.onGetGenres();
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="navbar">
            {this.props.genres.map(genre => (
              <button
                key={genre.id}
                onClick={() => this.props.onGetMoviesByGenre(genre)}
              >
                {genre.name}
              </button>
            ))}
          </div>
          <h1>{this.props.type}</h1>
          <button
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>

        {this.props.showCards ? (
          <div className="cards">
            {this.props.movies.map(card => (
              <Card
                key={card.id}
                id={card.id}
                backgroundImage={getImageUrl(card.backdrop_path)}
                date={card.release_date}
                rating={card.vote_average}
                votes={card.vote_count}
                description={card.overview}
                title={card.original_title}
                liked={this.props.likedMovies.includes(card.id) ? true : false}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCards: state.componentState.showCards,
  movies: state.cards.movies,
  genres: state.cards.genres,
  type: state.cards.currentType,
  likedMovies: state.cards.likedMovies
});
const mapDispatchToProps = dispatch => ({
  onToggleCards: shouldShow => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  onGetGenres: () => dispatch(getGenres()),
  onGetMoviesByGenre: genre => dispatch(getMoviesByGenre(genre))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
