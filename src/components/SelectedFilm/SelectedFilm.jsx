import { image } from 'API/API';
import React from 'react';
import styled from './styled.module.scss';

function SelectedFilm({
  data: {
    genres,
    poster_path,
    title,
    vote_average,
    overview,
    id,
    release_date,
  },
}) {
  const genresData = genresData => {
    const arrGenre = [];
    genresData.forEach(({ name }) => arrGenre.push(name));
    return arrGenre.join(', ');
  };

  return (
    <div>
      {id && (
        <div className={styled.container}>
          <img src={image(poster_path)} alt={title} width="300" />
          <ul>
            <li>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
            </li>
            <li>
              <p>User score: {vote_average * 10}%</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{genresData(genres)}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectedFilm;
