import { image } from 'API/API';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from './styled.module.scss';
import PropTypes from 'prop-types';

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

ItemsList.propTypes = {
  location: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ItemsList;
