import { fetchTrendingFilms } from 'API/API';
import { useEffect, useState } from 'react';
import ItemsList from './ItemsList/ItemsList';
import Nav from './Nav/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import InputSearch from './InputSearch/InputSearch';
import FilmsPage from './FilmsPage/FilmsPage';
import Cast from './Cast/Cast';
import Rewies from './Rewievs/Rewies';
import styled from './styled.module.scss';

export const App = () => {
  const [films, setFilms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetchTrendingFilms.then(({ data: { results } }) => setFilms(results));
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 className={styled.header}>Trending films</h2>
              <ItemsList items={films} location={pathname} />
            </>
          }
        />

        <Route path="/movies" element={<InputSearch />} />
        <Route path="/movies/:postId" element={<FilmsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewiews" element={<Rewies />} />
        </Route>

        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </>
  );
};
