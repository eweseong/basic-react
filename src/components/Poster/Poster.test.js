import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import Poster from './Poster';

const DEFAULT_POSTER_DATA = {
  id: '123',
  name: 'Tenet',
  image: 'tenet_poster_image_source',
};

describe('Poster', () => {
  function setup(poster = DEFAULT_POSTER_DATA) {
    const history = createMemoryHistory();
    const utils = render(
      <Router history={history}>
        <Poster {...poster} />
      </Router>
    );
    const image = screen.getByAltText(poster.name);
    const link = screen.getByRole('link');

    return {
      image,
      link,
      ...utils,
    };
  }

  it('should render poster image and link', () => {
    const { image, link } = setup();
    expect(image.getAttribute('src')).toEqual('tenet_poster_image_source');
    expect(link.getAttribute('href')).toEqual('shows/123/tenet');
  });
});
