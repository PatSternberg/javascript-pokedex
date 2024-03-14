// file: src/api.js

// Import the Pokemon class from pokemon.js
const Pokemon = require('../src/pokemon');

// Declare the fetchPokemon function, which takes a pokemon's name
// as an argument and returns the pokemon's data
const fetchPokemon = (pokemon_name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => {
    return response.json();
  }).then((pokemonData) => {
    let pokemonTypes = []
    pokemonData.types.forEach((type) => {
      pokemonTypes.push(type.type.name);
    });
    const pokemon = new Pokemon(pokemonData.name, pokemonData.id, pokemonData.height, pokemonData.weight, pokemonTypes);
    return pokemon;
  });
};

module.exports = fetchPokemon;