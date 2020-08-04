/* eslint-disable react/prop-types */
import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { fetchCharacters } from '../services/avatar';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const page = state.page;
  const currentPage = state.currentPage;

  // if page is set in url, update/dispatch it
  useEffect(() => {
    const urlPage = Number((new URLSearchParams(window.location.href.split('?')[1])).get('page'));
    urlPage ? dispatch({ type: 'SET_PAGE', payload: urlPage }) : dispatch({ type: 'SET_PAGE', payload: 1 });
  }, []);
  
  // fetch characters
  useEffect(() => {
    if(page) fetchCharacters(page)
      .then(characters => dispatch({ type: 'SET_CHARACTERS', payload: characters }));
  }, [page]);

  // after fetch, update url - fetch updates currentPage to state.page
  useEffect(() => {
    if(currentPage) window.history.pushState({}, '', `?page=${currentPage}`);
  }, [currentPage]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
