export const fetchCharacters = (page = 1, perPage = 20) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(res => res.map(character => ({
      id: character._id,
      name: character.name,
      image: character.photoUrl
    })));
};
