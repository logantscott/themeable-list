import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/appContext';
import styles from './Characters.css';

const Characters = () => {
  const characters = useCharacters();
  if(characters.length === 0) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => {
    return (
      <li key={character.id}>
        <figure>
          <img src={character.image} />
          <figcaption>{character.name} - {character.id}</figcaption>
        </figure>
      </li>
    );
  });

  return (
    <ul className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  }))
};

export default Characters;
