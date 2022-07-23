import { fetchTrendingFilms } from 'API/API';
import { lazy, Suspense, useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from './styled.module.scss';

const ItemsList = lazy(() => import('./ItemsList/ItemsList'));
const InputSearch = lazy(() => import('./InputSearch/InputSearch'));
const FilmsPage = lazy(() => import('./FilmsPage/FilmsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Rewies = lazy(() => import('./Rewievs/Rewies'));

export const App = () => {
  const [films, setFilms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetchTrendingFilms.then(({ data: { results } }) => setFilms(results));
  }, []);

  return (
    <>
      <Nav />
      <Suspense>
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
      </Suspense>
    </>
  );
};
