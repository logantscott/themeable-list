import fetchCharacters from '../services/avatar';

export const useCharacters = () => {
  return fetchCharacters(20, 1)
    .then(res => res);
};
