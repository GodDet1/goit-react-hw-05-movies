import { fetchfilmById } from 'API/API';
import SelectedFilm from 'components/SelectedFilm/SelectedFilm';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from './styled.module.scss';

function FilmsPage() {
  const { postId } = useParams();
  const [film, setFilm] = useState({});
  const {
    state: { from },
  } = useLocation();
  const navigate = useNavigate();

  console.log(from);

  useEffect(() => {
    fetchfilmById(postId).then(({ data }) => setFilm(data));
  }, [postId]);

  const handleClick = () => (from === null ? navigate('/') : navigate(from));

  return (
    <>
      <section className={styled.container + ' container'}>
        <button type="button" onClick={handleClick} className={styled.btn}>
          Go back
        </button>
        <SelectedFilm data={film} />
        <hr />
        <h3 className={styled.h3}>Additional info</h3>
        <ul className={styled.link_list}>
          <li>
            <Link to="cast" state={{ from: from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="rewiews" state={{ from: from }}>
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
