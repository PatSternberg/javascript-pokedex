// file: __tests__/pokedex.integration.test.js

// Import the Pokedex class from pokedex.js
const Pokedex = require('../src/pokedex');

// Tests begin here
describe('Pokedex API integration tests', () => {
  test('Pokedex.catch connects to the API and adds entries to the Pokedex', () => {
    const pokedex = new Pokedex();
    return pokedex.catch('mr-mime').then(() => {
      return pokedex.catch('gyarados').then(() => {
        expect(pokedex.all()[0]['name']).toEqual('mr-mime');
        expect(pokedex.all()[1]['name']).toEqual('gyarados');
      });
    });
  });
});