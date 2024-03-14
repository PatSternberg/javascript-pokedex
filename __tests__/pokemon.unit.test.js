// file: __tests__/pokemon.unit.test.js

// Import the Pokemon class from pokemon.js
const Pokemon = require('../src/pokemon');

// Tests begin here
describe('Pokemon class tests', () => {
  test('Pokemon constructs correctly with one type', () => {
    const pokemon = new Pokemon('mr-mime', 10, 100, 50, ['psychic']);
    expect(pokemon.name).toEqual('mr-mime');
    expect(pokemon.id).toEqual(10);
    expect(pokemon.height).toEqual(100);
    expect(pokemon.weight).toEqual(50);
    expect(pokemon.types).toEqual(['psychic']);
  });
  test('Pokemon constructs correctly with multiple types', () => {
    const pokemon = new Pokemon('gyarados', 50, 750, 250, ['water', 'dragon']);
    expect(pokemon.name).toEqual('gyarados');
    expect(pokemon.id).toEqual(50);
    expect(pokemon.height).toEqual(750);
    expect(pokemon.weight).toEqual(250);
    expect(pokemon.types).toEqual(['water', 'dragon']);
  });
});