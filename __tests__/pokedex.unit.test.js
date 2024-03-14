// file: __tests__/pokedex.unit.test.js

// Import the Pokedex class from pokedex.js
const fetchPokemon = require('../src/api');
const Pokedex = require('../src/pokedex');

// Set up a mock for the API request
jest.mock('../src/api');

// Tests begin here
describe('Pokedex class tests', () => {
  beforeEach(() => {
    // Before each test, reset the mock
    fetchPokemon.mockClear();
  });
  test('Pokedex constructs correctly with no contents', () => {
    const pokedex = new Pokedex();
    expect(pokedex.contents).toEqual([]);
  });
  test('Pokedex.all returns an empty array when no Pokemon have been caught', () => {
    const pokedex = new Pokedex();
    expect(pokedex.all()).toEqual([]);
  });
  test('Pokedex.catch adds an entry to the Pokedex', () => {
    const pokedex = new Pokedex();
    const testPokemon = {
      name: 'mr-mime',
      id: 10,
      height: 100,
      weight: 50,
      types: ['psychic'] };
    const mockPokemonAPI = () => { fetchPokemon() };
    mockPokemonAPI(() => {return testPokemon});
    pokedex.catch(mockPokemonAPI);
    expect(pokedex.contents).toEqual([testPokemon]);
  });
});