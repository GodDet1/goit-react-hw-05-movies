import { lazy, Suspense } from 'react';
import Nav from './Nav/Nav';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';

const InputSearch = lazy(() => import('./InputSearch/InputSearch'));
const FilmsPage = lazy(() => import('./FilmsPage/FilmsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Rewievs = lazy(() => import('./Rewievs/Rewies'));

export const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<InputSearch />} />
          <Route path="/movies/:postId/*" element={<FilmsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewiews" element={<Rewievs />} />
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </Suspense>
    </>
  );
};
