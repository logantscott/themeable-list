import React from 'react';
import { useDispatch, useCurrentPage } from '../../hooks/appContext';
import styles from './Pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useCurrentPage();

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_PAGE' });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };

  return (
    <>
      <button onClick={handlePrevious}>&lt;</button>
      <span className={styles.Pagination}>{page}</span>
      <button onClick={handleNext}>&gt;</button>
    </>
  );
};

export default Pagination;
