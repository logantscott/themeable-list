import React from 'react';
import Characters from '../List/Characters';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';

export default function App() {
  return (
    <>
      <Header />
      <Pagination />
      <Characters />
    </>
  );
}
