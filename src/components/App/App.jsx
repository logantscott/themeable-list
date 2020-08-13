import React from 'react';
import CharactersContainer from '../../containers/Characters';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={CharactersContainer} />
        </Switch>
      </Router>
    </>
  );
}
