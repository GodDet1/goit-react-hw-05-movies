import { fetchActors, image } from 'API/API';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from './styled.module.scss';

function Cast() {
  const [actors, setActors] = useState([]);
  const { postId } = useParams([]);

  useEffect(() => {
    fetchActors(postId).then(({ data: { cast } }) => setActors(cast));
  }, [postId]);

  return (
    <section>
      <ul className={styled.list}>
        {actors.map(actor => (
          <li key={actor.id} className={styled.list_item}>
            <img src={image(actor.profile_path)} alt={actor.name} width="500" />
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cast;
