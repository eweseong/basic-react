import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Poster.scss';

export default function Poster(poster) {
  const { id, name, image } = poster;

  return (
    <NavLink
      className="poster"
      to={{
        pathname: `shows/${id}/${name.toLowerCase().split(' ').join('_')}`,
        state: {
          poster,
        },
      }}
      exact
    >
      <img className="poster__image" src={image} alt={name} />
    </NavLink>
  );
}

Poster.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Poster.defaultProps = {
  image: 'placeholder_image_source',
};
