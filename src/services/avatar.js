export const fetchCharacters = (page, perPage = 20) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json());
};
