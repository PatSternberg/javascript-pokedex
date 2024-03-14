// file: __tests__/pokedex.integration.test.js

// Import the Pokedex class from pokedex.js
const Pokedex = require('../src/pokedex');
const Pokemon = require('../src/pokemon');
const fetchPokemon = require('../src/api');

// Tests begin here
describe('Pokedex API integration tests', () => {
  test('Pokedex.catch connects to the API and adds entries to the Pokedex', () => {
    const pokedex = new Pokedex();
    pokedex.catch('mr-mime');
    pokedex.catch('gyarados');
    expect(pokedex.all()).toEqual(['mr-mime', 'gyarados']);
  });
});