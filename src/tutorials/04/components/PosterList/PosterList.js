import React from 'react';
import Poster from '../Poster/Poster';
import './PosterList.css';

/**
 * Keys
 *
 * Keys help React identify which items have changed, are added,
 * or are removed. Keys should be given to the elements inside
 * the array to give the elements a stable identity.
 *
 * The best way to pick a key is to use a string that uniquely
 * identifies a list item among its siblings. Most often you
 * would use IDs from your data as keys.
 *
 * Keys used within arrays should be unique among their siblings.
 * However they don’t need to be globally unique. We can use the
 * same keys when we produce two different arrays.
 *
 * Keys serve as a hint to React but they don’t get passed to your
 * components. If you need the same value in your component, pass
 * it explicitly as a prop with a different name:
 */
export default function PosterList({ title, posters, showBackdrop }) {
  return (
    <div className="poster-list">
      <h3 className="poster-list__title">{title}</h3>
      <div className="poster-list__container">
        {posters.length > 0 ? (
          posters.map(({ id, name, backdrop_path, poster_path }) => (
            <Poster
              key={id}
              name={name}
              image={showBackdrop ? backdrop_path : poster_path}
            />
          ))
        ) : (
          <>This list is empty now, please come back later.</>
        )}
      </div>
    </div>
  );
}
