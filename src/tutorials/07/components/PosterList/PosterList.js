import React from 'react';
import Poster from '../Poster/Poster';
import styles from './PosterList.module.css';

export default function PosterList({ title, posters, showBackdrop }) {
  return (
    <div className="poster-list">
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        {posters.length > 0 ? (
          posters.map((poster) => {
            const {
              id,
              name,
              original_name,
              original_title,
              backdrop_path,
              poster_path,
            } = poster;
            return (
              <Poster
                key={id}
                id={id}
                name={name || original_name || original_title}
                image={showBackdrop ? backdrop_path : poster_path}
                {...poster}
              />
            );
          })
        ) : (
          <>This list is empty now, please come back later.</>
        )}
      </div>
    </div>
  );
}
