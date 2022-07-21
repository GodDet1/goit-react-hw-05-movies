import { fetchfilmById } from 'API/API';
import SelectedFilm from 'components/SelectedFilm/SelectedFilm';
import { useEffect, useState } from 'react';
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
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchfilmById(postId).then(({ data }) => setFilm(data));
  }, [postId]);

  const handleClick = () => {
    navigate(state.from, { replace: true });
  };

  return (
    <section className={styled.container + ' container'}>
      <button type="button" onClick={handleClick} className={styled.btn}>
        Go back
      </button>
      <SelectedFilm data={film} />
      <hr />
      <h3 className={styled.h3}>Additional info</h3>
      <ul className={styled.link_list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="rewiews">Rewiews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </section>
  );
}

export default FilmsPage;
