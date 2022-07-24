import { lazy } from 'react';
import styled from './styled.module.scss';
import PropTypes from 'prop-types';

const ItemsList = lazy(() => import('components/ItemsList/ItemsList'));

function Home({ location, films }) {
  return (
    <>
      <h2 className={styled.header}>Trending films</h2>
      <ItemsList items={films} location={location} />
    </>
  );
}

Home.propTypes = {
  location: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

export default Home;
