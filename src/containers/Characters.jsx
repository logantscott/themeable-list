/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Characters from '../components/List/Characters';
import Pagination from '../components/pagination/Pagination';
import { useDispatch, usePage, useCurrentPage } from '../hooks/appContext';
import { fetchCharacters } from '../services/avatar';

const CharactersContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const page = usePage();
  const currentPage = useCurrentPage();

  useEffect(() => {
    if(new URLSearchParams(location.search).get('page')) dispatch({ type: 'SET_PAGE', payload: Number(new URLSearchParams(location.search).get('page')) });
  }, []);

  useEffect(() => {
    if(page && page !== currentPage) {
      fetchCharacters(page)
        .then(characters => {
          if(characters.length === 0) {
            return;
          }
          dispatch({ type: 'SET_CHARACTERS', payload: characters });
          history.push(`?page=${page}`);
        });
    }
  }, [page]);

  return (
    <>
      <Pagination />
      <Characters />
    </>
  );
};

export default CharactersContainer;
