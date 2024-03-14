// file: src/api.js

// Declare the fetchPokemon function, which takes a pokemon's name
// as an argument and returns the pokemon's data
const fetchPokemon = (pokemon_name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => {
    return response.json();
  });
};

module.exports = fetchPokemon;