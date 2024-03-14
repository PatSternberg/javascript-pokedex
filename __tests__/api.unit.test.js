// file: __tests__/api.unit.test.js

// Import the fetchPokemon function from api.js
const fetchPokemon = require('../src/api');

// Tests begin here
describe('fetchPokemon tests', () => {
  test('fetchPokemon succesffuly GETs the pokemon data at the correct URL', async () => {
    const pokemon = await fetchPokemon('mr-mime');
    expect(pokemon.name).toEqual('mr-mime');
    expect(pokemon.id).toEqual(122);
    expect(pokemon.height).toEqual(13);
    expect(pokemon.weight).toEqual(545);
    expect(pokemon.types).toEqual(['psychic', 'fairy']);
  });
  test('fetchPokemon succesffuly GETs the data at the correct URL', async () => {
    const data = await fetchPokemon('mr-mime');
    expect(data.name).toEqual('mr-mime');
  });
  test('fetchPokemon succesffuly GETs the data at the correct URL', async () => {
    const data = await fetchPokemon('mr-mime');
    expect(data.name).toEqual('mr-mime');
  });
});