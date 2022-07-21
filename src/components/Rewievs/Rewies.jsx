import { fetchreviews } from 'API/API';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from './styled.module.scss';

function Rewies() {
  const [rewiews, setRewiews] = useState([]);
  const { postId } = useParams([]);

  useEffect(() => {
    fetchreviews(postId).then(({ data: { results } }) => setRewiews(results));
  }, [postId]);

  return (
    <section>
      {rewiews.length === 0 ? (
        <h3>There is no reviews</h3>
      ) : (
        <ul className={styled.list}>
          {rewiews.map(rewiew => (
            <li key={rewiew.id} className={styled.list_item}>
              <h3> Author: {rewiew.author}</h3>
              <hr />
              <p>{rewiew.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Rewies;
