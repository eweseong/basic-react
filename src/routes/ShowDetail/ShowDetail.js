import classnames from 'classnames';
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './ShowDetail.css';

class ShowDetail extends Component {
  render() {
    if (!this.props.location.state) {
      return <Redirect to="/" />;
    }

    const {
      backdrop_path,
      first_air_date,
      id,
      name,
      original_title,
      overview,
      release_date,
      vote_average,
    } = this.props.location.state.poster;
    const title = name || original_title;
    const date = first_air_date || release_date;
    const rating = Math.round(vote_average * 10);
    const ratingClass = classnames('show-detail__rating', {
      'show-detail__rating--good': rating >= 80,
      'show-detail__rating--average': rating >= 50 && rating < 80,
      'show-detail__rating--bad': rating < 50,
    });

    return (
      <div className="show-detail" data-id={id}>
        <img className="show-detail__image" src={backdrop_path} alt={title} />
        <h1>{title}</h1>
        <p>
          <span className={ratingClass}>Rating: {rating}%</span>
          &nbsp;
          <span className="show-detail__date">Release date: {date}</span>
        </p>
        <p className="show-detail__overview">{overview}</p>
        <button className="btn btn--primary show-detail__button" type="button">
          Play
        </button>
        <button className="btn show-detail__button" type="button">
          + My List
        </button>
      </div>
    );
  }
}

export default withRouter(ShowDetail);
