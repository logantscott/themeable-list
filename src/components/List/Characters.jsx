import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  // const characterElements = characters.map(character => {
  //   return (
  //     <li key={character.id}>
  //       <img src={character.image} />
  //       {character.id} - {character.name}
  //     </li>
  //   );
  // });

  return (
    <ul>
      {/* {characterElements} */}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
};

export default Characters;
