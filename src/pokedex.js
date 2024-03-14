// file: src/pokedex.js

// Import the Pokemon class from pokemon.js
// and the fetchPokemon function from api.js
const fetchPokemon = require('../src/api');
const Pokemon = require('../src/pokemon');

// Define the pokedex class and its methods
class Pokedex {

  constructor() {
    this.contents = [];
  };

  all() {
    return this.contents;
  };

  catch(pokemon_name) {
    fetchPokemon(pokemon_name);
    this.contents.push(pokemon_name);
  };

};

module.exports = Pokedex;