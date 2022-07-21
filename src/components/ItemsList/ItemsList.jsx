import { image } from 'API/API';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from './styled.module.scss';

function ItemsList({ items, location }) {
  return (
    <div className="container">
      <ul className={styled.list}>
        {items.map(({ title, id, poster_path }) => (
          <li key={id} className={styled.list_item}>
            <Link
              to={`/movies/${id}`}
              className={styled.list_link}
              state={{ from: location }}
            >
              <img src={image(poster_path)} alt="None" width="500" />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
