import { fetchTrendingFilms } from 'API/API';
import { useEffect, useState } from 'react';
import { lazy } from 'react';
import { useLocation } from 'react-router-dom';
import styled from './styled.module.scss';

const ItemsList = lazy(() => import('components/ItemsList/ItemsList'));

function Home() {
  const [films, setFilms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetchTrendingFilms.then(({ data: { results } }) => setFilms(results));
  }, []);

  return (
    <>
      <h2 className={styled.header}>Trending films</h2>
      <ItemsList items={films} location={pathname} />
    </>
  );
}

export default Home;
