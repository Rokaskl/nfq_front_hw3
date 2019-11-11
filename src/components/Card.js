import React from "react";
import { connect } from "react-redux";
import { likeMovie, unLikeMovie } from "../actions";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      showDescription: true
    };
  }

  render() {
    const { showDescription } = this.state;
    const {
      id,
      title,
      backgroundImage,
      date,
      rating,
      votes,
      description,
      liked
    } = this.props;
    const handleClick = id => {
      liked ? this.props.unLikeMovie(id) : this.props.likeMovie(id);
    };
    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />

        <div className="card__title">{title}</div>

        <div className="card__like" onClick={() => handleClick(id)}>
          {liked ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </div>

        <div className="card__subtitle">
          <span>{date}</span>
          <span>
            {rating} ({votes} votes)
          </span>
        </div>

        <div className="card-info">
          <div className="card-info__header">Summary</div>
          <button
            onClick={() => {
              this.setState({ showDescription: !showDescription });
            }}
          >
            Toggle
          </button>
          <div className="card-info__description">
            {showDescription ? description : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  likeMovie: id => dispatch(likeMovie(id)),
  unLikeMovie: id => dispatch(unLikeMovie(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
