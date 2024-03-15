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
    // Set up mockPokemon object and mock for fetchPokemon function
    const mockPokemon = {
      name: 'mr-mime',
      id: 10,
      height: 100,
      weight: 50,
      types: ['psychic']
    };
    fetchPokemon.mockResolvedValueOnce(mockPokemon);

    const pokedex = new Pokedex();
    return pokedex.catch('mr-mime').then(() => {
      expect(pokedex.contents).toEqual([mockPokemon]);
      expect(pokedex.contents[0]['id']).toEqual(10);
    });
  });
});