import { fetchfilmById } from 'API/API';
import SelectedFilm from 'components/SelectedFilm/SelectedFilm';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from './styled.module.scss';

function FilmsPage() {
  const { postId } = useParams();
  const [film, setFilm] = useState({});
  const { state } = useLocation();

  const path = state?.from ?? '/';

  useEffect(() => {
    fetchfilmById(postId).then(({ data }) => setFilm(data));
  }, [postId]);

  return (
    <>
      <section className={styled.container + ' container'}>
        <Link to={path}>
          <button type="button">Go back</button>
        </Link>

        <SelectedFilm data={film} />
        <hr />
        <h3 className={styled.h3}>Additional info</h3>
        <ul className={styled.link_list}>
          <li>
            <Link to="cast" state={{ from: path }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="rewiews" state={{ from: path }}>
              Rewiews
            </Link>
          </li>
        </ul>
        <hr />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
}

export default FilmsPage;
