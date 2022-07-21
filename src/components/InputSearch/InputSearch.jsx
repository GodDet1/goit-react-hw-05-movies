import { fetchSearchingFilms } from 'API/API';
import ItemsList from 'components/ItemsList/ItemsList';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from './styled.module.scss';

function InputSearch() {
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query'), [searchParams]);
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (query === null || query.length === 0) {
      return;
    }

    setSubmit(query);
    setText(query);
  }, [query]);

  useEffect(() => {
    if (submit.length === 0) {
      return;
    }
    fetchSearchingFilms(submit).then(({ data: { results } }) => {
      setSearchedFilms(results);
    });
  }, [submit]);

  const handleInput = e => {
    setText(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.length === 0) {
      setSearchedFilms([]);
      setSearchParams();
      return;
    }

    setSubmit(text);
    setSearchParams({ query: text });
  };

  return (
    <div className="container">
      <div className={styled.container}>
        <input
          type="text"
          value={text}
          onChange={handleInput}
          className={styled.search}
          placeholder="Search..."
          autoFocus
        />
        <button type="submit" onClick={handleSubmit} className={styled.btn}>
          Search
        </button>
      </div>

      {searchedFilms.length !== 0 && (
        <ItemsList items={searchedFilms} location={pathname + search} />
      )}
    </div>
  );
}

export default InputSearch;
