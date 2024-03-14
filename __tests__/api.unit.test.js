// file: __tests__/api.unit.test.js

// Import the fetchPokeom function from api.js
const fetchPokemon = require('../src/api');

// Tests begin here
describe('fetchPokemon tests', () => {
  test('fetchPokemon succesffuly GETs the data at the correct URL', async () => {
    const data = await fetchPokemon('mr-mime');
    expect(data.name).toEqual('mr-mime');
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
// Update fetchPokemon so that:

//     Instead of console.loging the Pokémon data,
// we instead use it to create and return a new object,
// containing the following fields:
//         name, the name of the Pokémon
//         id, the id number of the Pokémon
//         height
//         weight
//         (Bonus) types, what types the Pokémon is.
// This should be an array, such as ['electric'] or ['fire', flying']
